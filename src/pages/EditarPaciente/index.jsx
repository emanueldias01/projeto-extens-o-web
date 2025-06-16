import { useNavigate, useParams } from "react-router-dom"
import './style.css'
import Botao from "../../components/botao"
import { FaCheck } from "react-icons/fa";


const EditarPaciente = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    return(
        <div className="container-editar">
            <h1>Editar informações do paciente:</h1>
            <div className="container-info-edit">
                <label htmlFor="Nome">Nome:</label>
                <input type="text" />

                <label htmlFor="CPF">CPF:</label>
                <input type="text"/>

                <label htmlFor="leito">Leito:</label>
                <input type="text" />

                <div className="div-botao" onClick={() => {
                    navigate('/')
                }}>
                    <Botao texto={'Atualizar'} cor={'green'} icone={<FaCheck />}/>
                </div>
            </div>
        </div>
    )
}

export default EditarPaciente