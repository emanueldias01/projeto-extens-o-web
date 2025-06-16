import { useParams } from "react-router-dom"
import './style.css'
import Visitante from "../../components/visitante/Visitante"
import Botao from "../../components/botao"
import { IoMdAdd } from "react-icons/io";
import { MdEdit } from "react-icons/md";


const OpcoesPaciente = () => {

    const { id } = useParams()

    return(
        <div className="container-info">
            <div className="div-header">
                <h1>Informações de Paciente</h1>
                <Botao texto={"Editar"} cor={'orange'} icone={<MdEdit />}/>
            </div>
            
            <div className="info-paciente">
                <h1>Nome:</h1>
                <p>nome-paciente</p>

                <h1>CPF:</h1>
                <p>cpf-paciente</p>

                <h1>Leito:</h1>
                <p>leito-paciente</p>

                <h1>Data de entrada:</h1>
                <p>data-entrada-paciente</p>
            </div>

            <div>
                <h1>Lista de Visitantes:</h1>
                <div className="lista-visitantes">
                    <Visitante id={1} nome={'visitante1'} cpf={'cpf1'} categoria={'categoria1'} dataEntrada={'dataEntrada1'}/>
                    <Visitante id={2} nome={'visitante2'} cpf={'cpf2'} categoria={'categoria2'} dataEntrada={'dataEntrada2'}/>
                </div>
                <div className="div-botao">
                    <Botao texto={'Adicionar'} icone={<IoMdAdd />} cor={'green'}/>
                </div>
            </div>
        </div>
    )
}

export default OpcoesPaciente