interface SelectProps {
    label: string;
    value: string | number;
    options: Array<{ id?: number; name: string }>;
    updateValue(value: any): void;
    className?: string
}

export const Select = ({ label, value, options, updateValue, className }: SelectProps) => {
    return (
        <>
            <div className={className ? className : "input-prop"}>
                <label>{label}</label>
                <select value={value} onChange={e => updateValue(e.target.value)}>
                    {options.map(option => (
                        <option key={option.id} value={option.name}>
                            {option.name}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};