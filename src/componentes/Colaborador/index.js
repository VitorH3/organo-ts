import './Colaborador.css'

const Colaborador = ({nome, imagem, posiçao, corDeFundo}) => {
    return (<div className='colaborador'>
        <div className='cabeçalho' style={{backgroundColor: corDeFundo}}>
            <img src = {imagem} alt = {nome} />
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{posiçao}</h5>
        </div>
    </div>)
}

export default Colaborador