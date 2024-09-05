import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState ('')
    const [posiçao, setPosiçao] = useState ('')
    const [imagem, setImagem] = useState ('')
    const [funçao, setFunçao] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado ({
            nome,
            posiçao,
            imagem,
            funçao
        })
        setNome('')
        setPosiçao('')
        setImagem('')
        setFunçao('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card de jogador/comissão.</h2>
                <CampoTexto
                    obrigatorio = {true}
                    label = "Nome"
                    placeholder = "Digite seu nome"
                    valor = {nome}
                    aoAlterado = {valor => setNome(valor)}
                    />
                <CampoTexto
                    obrigatorio = {true}
                    label = "Posição/Cargo"
                    placeholder = "Digite sua posição ou cargo"
                    valor = {posiçao}
                    aoAlterado = {valor => setPosiçao(valor)}
                />
                <CampoTexto
                    label = "Imagem"
                    placeholder = "Informe o endereço da imagem"
                    valor = {imagem}
                    aoAlterado = {valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio = {true}
                    label = "Funções"
                    itens = {props.funçoes}
                    valor = {funçao}
                    aoAlterado = {valor => setFunçao(valor)}
                />
                <Botao>
                    CRIAR CARD
                </Botao>
            </form>
        </section>
    )
}

export default Formulario