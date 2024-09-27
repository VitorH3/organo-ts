import './CampoTexto.css'

interface CampoTextoProps {
    placeholder: string
    label: string
    valor: string
    obrigatorio?: boolean
    aoAlterado: (valor: string) => void
    tipo?: 'text' | 'date' | 'number'
}

const CampoTexto = ( { aoAlterado, label, placeholder, valor, obrigatorio = false, tipo = 'text' } :CampoTextoProps) => {

    const placeholderModificada = `${placeholder} ...`

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholderModificada}
                type = {tipo}
            />
        </div>
    )
}

export default CampoTexto