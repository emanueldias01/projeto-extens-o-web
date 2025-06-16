import Paciente from "../../components/paciente"
import './style.css'

const ListaPacientes = () => {




    return(
        <div className="container">
            <h1>Lista de Pacientes</h1>
            <div className="list">
                <Paciente nome={'nome1'} cpf={'cpf1'} leito={'leito1'}/>
                <Paciente nome={'nome2'} cpf={'cpf2'} leito={'leito2'}/>
                <Paciente nome={'nome3'} cpf={'cpf3'} leito={'leito3'}/>
            </div>
        </div>
    )
}

export default ListaPacientes