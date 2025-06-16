import './style.css'
import { SlOptions } from "react-icons/sl";



const Paciente = ({nome, cpf, leito}) => {
    return(
        <div className='paciente'>
            <div>
                <h1>Nome</h1>
                <p>{nome}</p>
            </div>
            
            <div>
                <h1>CPF</h1>
                <p>{cpf}</p>
            </div>
            
            <div>
                <h1>Leito</h1>
                <p>{leito}</p>
            </div>

            <div className='icon'> 
                <SlOptions onClick={() => {console.log("hello world!")}}/>
            </div>
            
        </div>
    )
}

export default Paciente