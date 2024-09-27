import './Colaborador.css'

interface ColaboradorProps{
    nome: string
    imagem: string
    posicao: string
    corDeFundo: string
    data: string
}

const Colaborador = ({nome, imagem, posicao, corDeFundo, data} :ColaboradorProps) => {
    const dataLocal = new Date(`${data}T12:00:00Z`)
    const dataFormatada = dataLocal.toLocaleDateString()

    return (
    <div className='colaborador'>
        <div className='cabeçalho' style={{backgroundColor: corDeFundo}}>
            <img src = {imagem} alt = {nome} />
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{posicao}</h5>
            <h5>{dataFormatada}</h5>
        </div>
    </div>)
}

export default Colaborador