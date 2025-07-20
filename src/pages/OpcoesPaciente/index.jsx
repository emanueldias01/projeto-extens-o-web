import { useNavigate, useParams } from "react-router-dom"
import './style.css'
import Visitante from "../../components/visitante/Visitante"
import Botao from "../../components/botao"
import { IoMdAdd } from "react-icons/io";
import { MdEdit, MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
const apiIp = process.env.REACT_APP_API_URL;



const OpcoesPaciente = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const[nome, setNome] = useState("");
    const[cpf, setCpf] = useState("");
    const[leito, setLeito] = useState("");
    const [visitantes, setVisitantes] = useState([]);
    const [dataEntrada, setDataEntrada] = useState();

    const getInfoPaciente = async () => {
        try{
            const resposta = await axios.get(`${apiIp}/pacientes/${id}`);
            const dados = resposta.data;
            setNome(dados.nome);
            setCpf(dados.cpf);
            setLeito(dados.leito);
            setVisitantes(dados.visitantes);
            setDataEntrada(dados.dataEntrada);
        }catch(erro){
            window.alert("Erro ao buscar informações do paciente!");
            navigate("/");
        }
    }

    useEffect(() => {
        getInfoPaciente();
    }, []);

    const deletaPaciente = async () => {
        try{
            await axios.delete(`${apiIp}/pacientes/${id}`);
        }catch(erro){
            window.alert("Paciente deletado com sucesso!");
        }
        
    }

    return(
        <div className="container-info">
            <div className="div-header">
                <h1>Informações de Paciente</h1>
                <div onClick={() => {
                        const confirm = window.confirm("Tem certeza que deseja deletar o paciente?");
                        if(confirm) deletaPaciente(id);
                        navigate("/");
                    }}>
                     <Botao texto={"Deletar"} cor={"red"} icone={<MdDelete/>} />
                </div>
                <div onClick={() => {
                    navigate('/editaPaciente/' + id)
                }}>
                <Botao texto={"Editar"} cor={'orange'} icone={<MdEdit />}/>
            </div>
            
               
            </div>
            
            <div className="info-paciente">
                <h1>Nome:</h1>
                <p>{nome}</p>

                <h1>CPF:</h1>
                <p>{cpf}</p>

                <h1>Leito:</h1>
                <p>{leito}</p>

                <h1>Data de entrada:</h1>
                <p>{dataEntrada}</p>
            </div>

            <div>
                <h1>Lista de Visitantes:</h1>
                <div className="lista-visitantes">
                    {visitantes.length !== 0 ? visitantes.map(v => (
                        <Visitante key={v.id} id={v.id} nome={v.nome} categoria={v.categoria} dataEntrada={v.dataEntrada} cpf={v.cpf}/>
                    )) : <p>Nenhum visitante cadastrado</p>}
                </div>
                <div className="div-botao" onClick={() => {
                    navigate('/criarVisitante/' + id)
                }}>
                    <Botao texto={'Adicionar'} icone={<IoMdAdd />} cor={'green'}/>
                </div>
            </div>
        </div>
    )
}

export default OpcoesPaciente