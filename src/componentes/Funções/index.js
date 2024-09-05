import Colaborador from '../Colaborador'
import './Funçoes.css'

const Funçoes = (props) => {

    const cssStyle = {backgroundColor: props.corSecundaria}

    return (
        props.colaboradores.length > 0 ? <section className='funçoes' style={cssStyle}>
            <h3 style = {{borderColor: props.corPrimaria}} >{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map(colaborador => <Colaborador
                corDeFundo = {props.corPrimaria}
                key = {colaborador.nome}
                nome = {colaborador.nome}
                posiçao = {colaborador.posiçao}
                imagem = {colaborador.imagem}
            />)}
            </div>
        </section>
        : ''
    )
}

export default Funçoes