
import './style.css'

const Botao = ({texto, icone, cor}) => {
    return(
        <div className="botao" style={{ backgroundColor : cor }}>
            <p>{texto}</p>
            <p className='icone'>{icone}</p>
        </div>
    )
}

export default Botao