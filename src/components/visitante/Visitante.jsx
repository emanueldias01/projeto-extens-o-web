
import Botao from '../botao'
import { MdDelete } from "react-icons/md";
import './style.css'
import axios from 'axios';
const apiIp = process.env.REACT_APP_API_URL;


const Visitante = ({id, nome, cpf, categoria, dataEntrada}) => {

    const deletaVisitante = async () => {
        try{
            const confirm = window.confirm("Você tem certeza de que quer deletar o visitante?");
            if(confirm) await axios.delete(`${apiIp}/visitantes/${id}`);
            window.location.reload();
        }catch(erro){
            window.alert("Erro ao deletar visitante: " + erro)
        }
    }

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

            <div className='icone' onClick={() => deletaVisitante()}>
                <Botao texto={'Deletar'} icone={<MdDelete />} cor={'red'}/>
            </div>
            
        </div>
    )
}

export default Visitante