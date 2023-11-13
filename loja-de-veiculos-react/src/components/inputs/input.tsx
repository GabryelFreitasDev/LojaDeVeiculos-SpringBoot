export interface InputProps {
    label: string
    value: string | number
    updateValue(value: any): void
    className?: string
    placeholder?: string
    maxLength?: number
}

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