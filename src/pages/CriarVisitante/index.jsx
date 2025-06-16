import { useNavigate, useParams } from "react-router-dom"
import './style.css'
import { IoMdAdd } from "react-icons/io"
import Botao from "../../components/botao"


const CriaVisitante = () => {
    
    const { id } = useParams()
    const navigate = useNavigate()

    return(
        <div className="container-info">
            <h1>Adicionar Visitante</h1>
            <div className="container-create">

                <label htmlFor="Nome">Nome:</label>
                <input type="text" />

                <label htmlFor="CPF">CPF:</label>
                <input type="text" />

                <label htmlFor="Categoria">Categoria</label>
                <select name="categoria">
                <option value="VISITANTE">VISITANTE</option>
                <option value="ACOMPANHANTE">ACOMPANHANTE</option>
                </select>

                <div className="div-botao" onClick={() => {
                    navigate('/paciente/' + id)
                }}>
                    <Botao texto={'Adicionar'} icone={<IoMdAdd />} cor={'green'}/>
                </div>
                
            </div>
        </div>
    )
}

export default CriaVisitante