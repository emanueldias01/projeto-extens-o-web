
import { IoMdAdd } from 'react-icons/io'
import Botao from '../../components/botao'
import './style.css'
import { useNavigate } from 'react-router-dom'

const CriarPaciente = () => {

    const navigate = useNavigate()

    return(
        <div className='container-create-paciente'>
        <h1>Adicionar Paciente:</h1>
            <div className='container-paciente'>
                <label htmlFor="cpf">Nome:</label>
                <input type="text" name="nome-paciente"/>

                <label htmlFor="cpf">CPF:</label>
                <input type="text" name='cpf-paciente'/>

                <label htmlFor="numero-leito">Numero do Leito:</label>
                <input type="text" name='numero-leito'/>

                <div className='div-botao' onClick={() => {
                    navigate('/')
                }}>
                    <Botao texto={'Registrar'} icone={<IoMdAdd />} cor={'green'}/>
                </div>
                
            </div>
            
            

        </div>
    )
}

export default CriarPaciente