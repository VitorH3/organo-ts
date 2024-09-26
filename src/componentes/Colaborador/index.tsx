import './Colaborador.css'

interface ColaboradorProps{
    nome: string
    imagem: string
    posicao: string
    corDeFundo: string
}

const Colaborador = ({nome, imagem, posicao, corDeFundo} :ColaboradorProps) => {
    return (<div className='colaborador'>
        <div className='cabeçalho' style={{backgroundColor: corDeFundo}}>
            <img src = {imagem} alt = {nome} />
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{posicao}</h5>
        </div>
    </div>)
}

export default Colaborador