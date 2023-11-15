import CurrencyInput from 'react-currency-input-field';
import { InputProps } from "../inputs/input";

//Props do componente
interface NumberInputProps {
    InputProps: InputProps
    prefix?: string
    decimalsLimit?: number
}

//Template padrão dos inputs numéricos da modal para reutilização do código e não precisar ficar reescrevendo
export const NumberInput = ({InputProps, prefix, decimalsLimit}:NumberInputProps) => {
  return (
    <div className={InputProps.className ? InputProps.className : "input-prop"}>
      <label>{InputProps.label}</label>
      <CurrencyInput
        prefix={prefix ? prefix : ""}
        value={InputProps.value}
        onValueChange={e => InputProps.updateValue(e)}
        decimalsLimit={decimalsLimit ? decimalsLimit : 2}
        allowNegativeValue={false}
        maxLength={InputProps.maxLength ? InputProps.maxLength : 40}
      />
    </div>
  );
};
