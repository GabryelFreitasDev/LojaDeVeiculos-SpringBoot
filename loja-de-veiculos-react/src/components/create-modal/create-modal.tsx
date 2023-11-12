import { useEffect, useState } from "react"
import { useVeiculoDataMutatePost } from "../../hooks/useVeiculoDataMutate"
import { VeiculoData } from "../../interface/VeiculoData"

import "./create-modal.css";

interface InputProps {
    label: string
    value: string | number
    updateValue(value: any): void
}

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps) {
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState(0);
    const [marca, setMarca] = useState("");
    const [cor, setCor] = useState("");
    const [combustivel, setCombustivel] = useState("");
    const [anoFabricacao, setAnoFabricacao] = useState("");
    const [anoModelo, setAnoModelo] = useState("");
    const [quilometragem, setQuilometragem] = useState(0);
    const [potencia, setPotencia] = useState(0);
    const [placa, setPlaca] = useState("");
    const [imagem, setImagem] = useState("");
    
    const { mutate, isSuccess } = useVeiculoDataMutatePost();

    const submit = () => {
        const veiculoData: VeiculoData = {
            nome,
            valor,
            cor,
            marca,
            combustivel,
            anoFabricacao,
            anoModelo,
            quilometragem,
            potencia,
            placa,
            imagem
        }

        mutate(veiculoData);
    }

    useEffect(() => {
        if (!isSuccess) return
        closeModal();
    }, [isSuccess])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo veículo</h2>
                <form className="input-container">
                    <Input label="Nome: " value={nome} updateValue={setNome} />
                    <Input label="Valor: " value={valor} updateValue={setValor} />
                    <Input label="Cor: " value={cor} updateValue={setCor} />
                    <Input label="Marca: " value={marca} updateValue={setMarca} />
                    <Input label="Combustível: " value={combustivel} updateValue={setCombustivel} />
                    <Input label="Ano de fabricação: " value={anoFabricacao} updateValue={setAnoFabricacao} />
                    <Input label="Ano do modelo: " value={anoModelo} updateValue={setAnoModelo} />
                    <Input label="Quilometragem: " value={quilometragem} updateValue={setQuilometragem} />
                    <Input label="Potencia: " value={potencia} updateValue={setPotencia} />
                    <Input label="Placa: " value={placa} updateValue={setPlaca} />
                    <Input label="Imagem: " value={imagem} updateValue={setImagem} />
                </form>
                <button onClick={submit} className="btn-secundary">Salvar</button>
            </div>
        </div>
    )
}