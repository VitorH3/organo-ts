import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { IColaborador } from '../../compartilhado/interface/IColaborador'

interface FormularioProps{
    setores: string[]
    aoColaboradorCadastrado: (colaborador: IColaborador) => void
}

const Formulario = (props: FormularioProps) => {

    const [nome, setNome] = useState ('')
    const [posicao, setPosicao] = useState ('')
    const [imagem, setImagem] = useState ('')
    const [setor, setSetor] = useState('')

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado ({
            nome,
            posicao,
            imagem,
            setor
        })
        setNome('')
        setPosicao('')
        setImagem('')
        setSetor('')
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
                    valor = {posicao}
                    aoAlterado = {valor => setPosicao(valor)}
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
                    itens = {props.setores}
                    valor = {setor}
                    aoAlterado = {valor => setSetor(valor)}
                />
                <Botao>
                    CRIAR CARD
                </Botao>
            </form>
        </section>
    )
}

export default Formulario