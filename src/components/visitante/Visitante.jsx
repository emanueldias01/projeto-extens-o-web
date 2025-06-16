
import Botao from '../botao'
import { MdDelete } from "react-icons/md";
import './style.css'

const Visitante = ({id, nome, cpf, categoria, dataEntrada}) => {
    return(
        <div className="container-visitante">
            <div>
                <h1>Nome:</h1>
                <p>{nome}</p>
            </div>
            

            <div>
                <h1>CPF:</h1>
                <p>{cpf}</p>
            </div>
            
            <div>
                <h1>Categoria:</h1>
                <p>{categoria}</p>
            </div>
            
            <div>
                <h1>Data de entrada:</h1>
                <p>{dataEntrada}</p>
            </div>

            <div className='icone'>
                <Botao texto={'Deletar'} icone={<MdDelete />} cor={'red'}/>
            </div>
            
        </div>
    )
}

export default Visitante