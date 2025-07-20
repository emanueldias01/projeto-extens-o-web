
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

    function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove pontos e traços

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    let resto = soma % 11;
    let digito1 = resto < 2 ? 0 : 11 - resto;

    if (parseInt(cpf.charAt(9)) !== digito1) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }

    resto = soma % 11;
    let digito2 = resto < 2 ? 0 : 11 - resto;

    return parseInt(cpf.charAt(10)) === digito2;
}

    const postCliente = async () => {
        try{
            if(!validarCPF(cpf)){
                window.alert("CPF inválido")
                return;
            }
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