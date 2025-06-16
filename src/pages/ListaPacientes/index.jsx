import Botao from "../../components/botao"
import Paciente from "../../components/paciente"
import { IoMdAdd } from "react-icons/io";
import './style.css'

const ListaPacientes = () => {
    return(
        <div className="container">
            <h1>Lista de Pacientes</h1>
            <div className="div-botao">
                <Botao texto={"Adicionar"} icone={<IoMdAdd />} cor={'green'}/>
            </div>
            <div className="list">
                <Paciente id={1} nome={'nome1'} cpf={'cpf1'} leito={'leito1'}/>
                <Paciente id={2} nome={'nome2'} cpf={'cpf2'} leito={'leito2'}/>
                <Paciente id={3} nome={'nome3'} cpf={'cpf3'} leito={'leito3'}/>
            </div>
        </div>
    )
}

export default ListaPacientes