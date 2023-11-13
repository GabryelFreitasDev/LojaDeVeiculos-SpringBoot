import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card'
import { useVeiculoData } from './hooks/useVeiculoData';
import { CreateModal } from './components/register-modal/register-modal';

function App() {
  const { data } = useVeiculoData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <div className="title">
        <h1>Carros</h1>
      </div>

      <div className="card-grid">
        {data?.map(veiculoData =>
          <Card
            id={veiculoData.id}
            nome={veiculoData.nome}
            valor={veiculoData.valor}
            marca={veiculoData.marca}
            cor={veiculoData.cor}
            combustivel={veiculoData.combustivel}
            anoModelo={veiculoData.anoModelo}
            anoFabricacao={veiculoData.anoFabricacao}
            quilometragem={veiculoData.quilometragem}
            potencia={veiculoData.potencia}
            placa={veiculoData.placa}
            imagem={veiculoData.imagem} />
        )}

        <div className="card-add">
          {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
          <button className="add-button" onClick={handleOpenModal}>Adicionar</button>
        </div>
      </div>
    </div>
  )
}

export default App
