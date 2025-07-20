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

    const getInfoPaciente = async () => {
        try{
            if(!validarCPF(dados.cpf)){
                window.alert("CPF inválido");
                throw new Error("cpf invalido");
            }
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
            navigate(`/paciente/${id}`)
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
                }}>
                    <Botao texto={'Atualizar'} cor={'green'} icone={<FaCheck />}/>
                </div>
            </div>
        </div>
    )
}

export default EditarPaciente