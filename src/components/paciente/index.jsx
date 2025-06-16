import { useNavigate } from 'react-router-dom';
import './style.css'
import { SlOptions } from "react-icons/sl";



const Paciente = ({id, nome, cpf, leito}) => {


    const navigate = useNavigate()

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

            <div className='icon' onClick={() => {
                    navigate("/paciente/" + id)
                }}> 
                <SlOptions/>
            </div>
            
        </div>
    )
}

export default Paciente