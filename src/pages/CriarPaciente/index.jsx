
import { IoMdAdd } from 'react-icons/io'
import Botao from '../../components/botao'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const apiIp = process.env.REACT_APP_API_URL;

const CriarPaciente = () => {

    const navigate = useNavigate();
    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [leito, setLeito] = useState();

    const postCliente = async () => {
        try{
            await axios.post(`${apiIp}/pacientes`, {
                nome : nome,
                cpf : cpf,
                leito : leito
            });
            window.alert("Paciente cadastrado com sucesso!");
            navigate('/');

        }catch(erro){
            window.alert("Erro ao cadastrar usuario: " + erro.message);
        }
    }

    return(
        <div className='container-create-paciente'>
        <h1>Adicionar Paciente:</h1>
            <div className='container-paciente'>
                <label htmlFor="cpf">Nome:</label>
                <input type="text" name="nome-paciente" onChange={(e) => setNome(e.target.value)}/>

                <label htmlFor="cpf">CPF:</label>
                <input type="text" name='cpf-paciente' onChange={(e) => setCpf(e.target.value)}/>

                <label htmlFor="numero-leito">Numero do Leito:</label>
                <input type="text" name='numero-leito' onChange={(e) => setLeito(e.target.value)}/>

                <div className='div-botao' onClick={(e) => {
                    e.preventDefault();
                    postCliente();
                }}>
                    <Botao texto={'Registrar'} icone={<IoMdAdd />} cor={'green'}/>
                </div>
                
            </div>
            
            

        </div>
    )
}

export default CriarPaciente