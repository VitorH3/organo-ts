import './Banner.css'

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string
}

const Banner = ({ enderecoImagem, textoAlternativo }: BannerProps) => {
    // JSX é como o React le isso e transforma em elementos no DOM
    return (
        <header className='banner'>
            <img src={enderecoImagem} alt={textoAlternativo} />
        </header>
    )
}

export default Banner