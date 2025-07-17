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

    const criarVisitante = async () => {
        console.log(apiIp)
        const body = {
            nome : nome,
            cpf : cpf,
            categoria : categoria,
            pacienteId : parseInt(id)
        }

        try{
            await axios.post(`${apiIp}/visitantes`, body)
            window.alert("Visitante cadastrado com sucesso!")
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
                    navigate('/paciente/' + id);
                    window.location.reload();
                }}>
                    <Botao texto={'Adicionar'} icone={<IoMdAdd />} cor={'green'}/>
                </div>
                
            </div>
        </div>
    )
}

export default CriaVisitante