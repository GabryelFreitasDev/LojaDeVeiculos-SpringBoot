import { useState } from 'react';
import { useVeiculoDataMutateDelete } from '../../hooks/useVeiculoDataMutate'
import { VeiculoData } from '../../interface/VeiculoData'
import './card.css'
import { CreateModal } from '../register-modal/register-modal';

export function Card({ id, nome, valor, marca, cor, combustivel, anoFabricacao, anoModelo, quilometragem, potencia, placa, imagem }: VeiculoData) {
    const { mutate } = useVeiculoDataMutateDelete();

    const veiculoData: VeiculoData = {
        id,
        nome,
        valor,
        marca,
        cor,
        combustivel,
        anoFabricacao,
        anoModelo,
        quilometragem,
        potencia,
        placa,
        imagem
    }

    const excluir = () => {
        mutate(id);
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev)
    }

    return (
        <div className="card">
            <img src={imagem} />
            <div className='title'>
                <h2>{nome}</h2>
            </div>

            <div className='information'>
                <p><b>Marca:</b> {marca}</p>
                <p><b>Cor:</b> {cor}</p>
                <p><b>Combustível:</b> {combustivel}</p>
                <p><b>Ano:</b> {anoFabricacao}/{anoModelo}</p>
                <p><b>Quilometragem:</b> {quilometragem.toLocaleString()} KM</p>
                <p><b>Potencia:</b> {potencia.toLocaleString()} CV</p>
                <p><b>Placa:</b> {placa}</p>

                <div className='value-container'>
                    <p className='value'><b>R$</b> {valor.toLocaleString()} </p>
                </div>

                <div className='button-container'>
                    {isModalOpen && <CreateModal closeModal={handleOpenModal} data={veiculoData} />}
                    <button className="button-edit" onClick={handleOpenModal}>Editar</button>
                    <button className="button-remove" onClick={excluir}>Remover</button>
                </div>
            </div>

        </div>)
}
