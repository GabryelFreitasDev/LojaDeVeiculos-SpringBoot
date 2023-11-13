import { useEffect, useState } from "react"
import { useVeiculoDataMutatePost, useVeiculoDataMutatePut } from "../../hooks/useVeiculoDataMutate"
import { VeiculoData } from "../../interface/VeiculoData"

import "./register-modal.css";
import { Select } from "../inputs/select";
import { Input } from "../inputs/input";
import { NumberInput } from "../inputs/numberInput";

interface ModalProps {
    closeModal(): void
    data?: VeiculoData
}

const CombustivelOptions = [
    { id: 1, name: "GASOLINA" },
    { id: 2, name: "ETANOL" },
    { id: 3, name: "FLEX" },
    { id: 4, name: "DIESEL" },
    { id: 5, name: "HIBRIDO" },
    { id: 6, name: "ELETRICO" },
];

const gerarListaDeAnos = () => {
    const anoAtual = new Date().getFullYear();
    const anosPassados = 100;
    const anos = [];

    for (let i = anoAtual - anosPassados; i <= anoAtual; i++) {
      anos.push({ name: i.toString() });
    }

    return anos;
  };

const anos = gerarListaDeAnos();

export function CreateModal({ closeModal, data }: ModalProps) {
    const id = data?.id;
    const [nome, setNome] = useState(data?.nome ? data.nome : "");
    const [valor, setValor] = useState(data?.valor ? data.valor : 0);
    const [marca, setMarca] = useState(data?.marca ? data.marca : "");
    const [cor, setCor] = useState(data?.cor ? data.cor : "");
    const [combustivel, setCombustivel] = useState(data?.combustivel ? data.combustivel : "");
    const [anoFabricacao, setAnoFabricacao] = useState(data?.anoFabricacao ? data.anoFabricacao : new Date().getFullYear().toString());
    const [anoModelo, setAnoModelo] = useState(data?.anoModelo ? data.anoModelo : new Date().getFullYear().toString());
    const [quilometragem, setQuilometragem] = useState(data?.quilometragem ? data.quilometragem : 0);
    const [potencia, setPotencia] = useState(data?.potencia ? data.potencia : 0);
    const [placa, setPlaca] = useState(data?.placa ? data.placa : "");
    const [imagem, setImagem] = useState(data?.imagem ? data.imagem : "");

    const { mutate, isSuccess } = data ? useVeiculoDataMutatePut() : useVeiculoDataMutatePost();

    const submit = () => {
        const veiculoData: VeiculoData = {
            id,
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
                <img src={imagem}></img>
                <form className="input-container">
                    <div className="input-line">
                        <Input label="URL imagem: " value={imagem} updateValue={setImagem} />
                    </div>
                    <div className="input-line">
                        <Input label="Nome: " value={nome} updateValue={setNome} />
                        <NumberInput InputProps={{label:"Valor (R$): ", value:valor, updateValue:setValor, maxLength:30}} prefix="R$ "/>
                    </div>
                    <div className="input-line">
                        <Input label="Cor: " value={cor} updateValue={setCor} />
                        <Input label="Marca: " value={marca} updateValue={setMarca} />
                        <Select label="Combustível: " value={combustivel} options={CombustivelOptions} updateValue={setCombustivel} />
                    </div>
                    <div className="input-line">
                        <Select label="Ano de fabricação: " value={anoFabricacao} options={anos} updateValue={setAnoFabricacao} />
                        <Select label="Ano do modelo: " value={anoModelo} options={anos} updateValue={setAnoModelo} />
                    </div>
                    <div className="input-line">
                        <NumberInput InputProps={{label:"Quilometragem (KM): ", value:quilometragem, updateValue:setQuilometragem, maxLength:15}} decimalsLimit={0}/>
                        <NumberInput InputProps={{label:"Potencia (CV): ", value:potencia, updateValue:setPotencia, maxLength:15}}  decimalsLimit={0}/>
                        <Input label="Placa: " value={placa} updateValue={setPlaca} />
                    </div>
                </form>
                <div className="button-container">
                    <button onClick={closeModal} className="button-cancel">Cancelar</button>
                    <button onClick={submit} className="button-save">Salvar</button>
                </div>
            </div>
        </div>
    )
}