import Botao from "../../components/botao"
import Paciente from "../../components/paciente"
import { IoMdAdd } from "react-icons/io";
import './style.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const apiIp = process.env.REACT_APP_API_URL;

const ListaPacientes = () => {

    const navigate = useNavigate()
    const [pacientes, setPacientes] = useState([]);

    const getPacientes = async () => {
        try{
            const resposta = await axios.get(`${apiIp}/pacientes`)
            console.log(resposta.data);
            setPacientes(resposta.data)
        }catch(erro){
            window.alert("erro ao retornar pacientes")
        }
    }

    useEffect(() => {
        getPacientes();
    }, [])
    return(
        <div className="container">
            <h1>Lista de Pacientes</h1>
            <div className="div-botao" onClick={() => {
                navigate('/criarPaciente')
            }}>
                <Botao texto={"Adicionar"} icone={<IoMdAdd />} cor={'green'}/>
            </div>
            <div className="list">
                {pacientes.length !== 0 ? pacientes.map(p => (
                    <Paciente key={p.id} id={p.id} nome={p.nome} cpf={p.cpf} leito={p.leito}/>
                )) : <p>Sem Pacientes cadastrados</p>}
            </div>
        </div>
    )
}

export default ListaPacientes