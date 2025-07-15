import { useNavigate, useParams } from "react-router-dom"
import './style.css'
import Botao from "../../components/botao"
import { FaCheck } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
const apiIp = process.env.REACT_APP_API_URL;


const EditarPaciente = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [leito, setLeito] = useState('');

    const getInfoPaciente = async () => {
        try{
            const resposta = await axios.get(`${apiIp}/pacientes/${id}`);
            const dados = resposta.data;
            setNome(dados.nome);
            setCpf(dados.cpf);
            setLeito(dados.leito);
        }catch(erro){
            window.alert("Erro ao buscar informações do paciente!");
            navigate("/");
        }
    }

    useEffect(() => {
        getInfoPaciente();
    }, []);

    const uptadePaciente = async () => {
        try{
            await axios.put(`${apiIp}/pacientes/${id}`,{
                nome : nome,
                cpf : cpf,
                leito : parseInt(leito)
            });
            window.alert("Paciente alterado com sucesso!");
            navigate("/");
        }catch(erro){
            window.alert("Não foi possível atualizar o paciente:" + erro.message);
            console.log(erro);
        }
    }

    return(
        <div className="container-editar">
            <h1>Editar informações do paciente:</h1>
            <div className="container-info-edit">
                <label htmlFor="Nome">Nome:</label>
                <input type="text" onChange={(e) => {setNome(e.target.value)}}/>

                <label htmlFor="CPF">CPF:</label>
                <input type="text" onChange={(e) => {setCpf(e.target.value)}}/>

                <label htmlFor="leito">Leito:</label>
                <input type="text" onChange={(e) => {setLeito(e.target.value)}}/>

                <div className="div-botao" onClick={(e) => {
                    e.preventDefault();
                    uptadePaciente();
                    navigate('/');
                }}>
                    <Botao texto={'Atualizar'} cor={'green'} icone={<FaCheck />}/>
                </div>
            </div>
        </div>
    )
}

export default EditarPaciente