import Paciente from "../../components/paciente"

const ListaPacientes = () => {




    return(
        <div className="container">
            <h1>Lista de Pacientes</h1>
            <div className="list">
                <Paciente nome={'nome1'} cpf={'cpf1'} leito={'leito1'}/>
            </div>
        </div>
    )
}

export default ListaPacientes