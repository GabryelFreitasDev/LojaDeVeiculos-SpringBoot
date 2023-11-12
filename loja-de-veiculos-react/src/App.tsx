import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card'
import { VeiculoData } from './interface/VeiculoData'

function App() {
  const data: VeiculoData[] = [];

  return (
    <div className="container">
      <h1>Carros</h1>
      <div className="card-grid">
        {data.map(veiculoData =>
          <Card
            nome={veiculoData.nome}
            marca={veiculoData.marca}
            cor={veiculoData.cor}
          />
        )}
      </div>
    </div>
  )
}

export default App
