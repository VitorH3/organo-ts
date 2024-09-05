import './Banner.css'

export const Banner = () => {
    // JSX é como o React le isso e transforma em elementos no DOM
    return (
        <header className='banner'>
            <img src = "/imagens/banner.png" alt = "O banner da página principal do Organo"/>
        </header>
    )
}

