
const Paciente = ({nome, cpf, leito}) => {
    return(
        <div>
            <p>{nome}</p>
            <p>{cpf}</p>
            <p>{leito}</p>
        </div>
    )
}

export default Paciente