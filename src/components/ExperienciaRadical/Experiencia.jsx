//Pagina que va a ver el usuario y va a cargar el mapa
import React from 'react'
import Mapa from './Mapa'

export default function Experiencia() {
  return (
    <div>
        <h1>Bienvenido a una experiencia radical</h1>
        <p>Cuando hagas click en ese botón encontrarás la coordenada exacta de tu próximo destino.</p>
        <button>Buscá tu destino</button>
        <Mapa />
    </div>
  )
}
