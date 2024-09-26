import { IColaborador } from '../../compartilhado/interface/IColaborador'
import Colaborador from '../Colaborador'
import './Setor.css'

interface SetorProps {
    corPrimaria: string
    corSecundaria: string
    nome: string
    colaboradores: IColaborador[]
}

const Setor = (props: SetorProps) => {

    const cssStyle = { backgroundColor: props.corSecundaria }

    return (
        (props.colaboradores.length > 0) ? <section className='setor' style={cssStyle}>
            <h3 style={{ borderColor: props.corPrimaria }} >{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador =>
                    <Colaborador
                        corDeFundo={props.corPrimaria}
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        posicao={colaborador.posicao}
                        imagem={colaborador.imagem}
                    />)}
            </div>
        </section>
        : <></>
    )
}

export default Setor