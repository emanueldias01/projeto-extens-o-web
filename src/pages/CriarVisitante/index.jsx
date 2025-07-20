import { useNavigate, useParams } from "react-router-dom"
import './style.css'
import { IoMdAdd } from "react-icons/io"
import Botao from "../../components/botao"
import { useState } from "react"
import axios from "axios"
const apiIp = process.env.REACT_APP_API_URL;


const CriaVisitante = () => {
    
    const { id } = useParams()
    const navigate = useNavigate()

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [categoria, setCategoria] = useState('VISITANTE')

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

    const criarVisitante = async () => {
        if(!validarCPF(cpf)){
            window.alert("CPF inválido");
        }
        const body = {
            nome : nome,
            cpf : cpf,
            categoria : categoria,
            pacienteId : parseInt(id)
        }

        try{
            await axios.post(`${apiIp}/visitantes`, body)
            window.alert("Visitante cadastrado com sucesso!")
            navigate('/paciente/' + id);
            window.location.reload();
        }catch(erro){
            const msg = erro.response?.data?.mensagem || "Não foi possível cadastrar o visitante: " + erro.message;
            window.alert(msg);
        }
        
    }

    return(
        <div className="container-info">
            <h1>Adicionar Visitante</h1>
            <div className="container-create">

                <label htmlFor="Nome">Nome:</label>
                <input type="text" onChange={(e) => setNome(e.target.value)}/>

                <label htmlFor="CPF">CPF:</label>
                <input type="text" onChange={(e) => setCpf(e.target.value)}/>

                <label htmlFor="Categoria">Categoria</label>
                <select name="categoria" onChange={(e) => setCategoria(e.target.value)}>
                <option value="VISITANTE">VISITANTE</option>
                <option value="ACOMPANHANTE">ACOMPANHANTE</option>
                </select>

                <div className="div-botao" onClick={() => {
                    criarVisitante();
                }}>
                    <Botao texto={'Adicionar'} icone={<IoMdAdd />} cor={'green'}/>
                </div>
                
            </div>
        </div>
    )
}

export default CriaVisitante