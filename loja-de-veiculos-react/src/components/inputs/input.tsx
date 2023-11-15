//Props do componente
export interface InputProps {
    label: string
    value: string | number
    updateValue(value: any): void
    className?: string
    placeholder?: string
    maxLength?: number
}

//Template padrão dos inputs para reutilização do código e não precisar ficar reescrevendo
export const Input = ({ label, value, updateValue, className, placeholder, maxLength }: InputProps) => {
    return (
        <>
            <div className={className ? className : "input-prop"}>
                <label>{label}</label>
                <input value={value} onChange={e => updateValue(e.target.value)} placeholder={placeholder} maxLength={maxLength ? maxLength : 255}></input>
            </div>
        </>
    )
}