import { useVeiculoDataMutateDelete } from '../../hooks/useVeiculoDataMutate'
import { VeiculoData } from '../../interface/VeiculoData'
import './card.css'

export function Card({ id, nome, valor, marca, cor, combustivel, anoFabricacao, anoModelo, quilometragem, potencia, placa, imagem }: VeiculoData) {
    const { mutate, isSuccess } = useVeiculoDataMutateDelete();

    const submit = () => {
        mutate(id);
    }


    return (
        <div className="card">
            <img src={imagem}/>
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
                <button onClick={submit}>remover</button>
            </div>

            
        </div>)
}
