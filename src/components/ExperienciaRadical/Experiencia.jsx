//Pagina que va a ver el usuario y va a cargar el mapa
import React, { useState } from 'react'

export default function Experiencia() {
  const [map, setMap] = useState(false)
  
  const lat = Math.random() * (64.9 - -54.40) + -54.40
  const lon = Math.random() * (-150.00 - -38.00) + -38.00;
  
  const handleMap =(e) =>{
    setMap(!map)
  }

  return (
    <div>
        <h1>Bienvenido a una experiencia radical</h1>
        <p>Cuando hagas click en ese botón encontrarás la coordenada exacta de tu próximo destino.</p>
        <button onClick={handleMap}>Buscá tu próximo destino</button>
        <div>
          {map === true ? <iframe title='Google Maps' src={`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`} id='iframeId' height="400px" width="500px"/> : <p>Te animas?</p>}
        </div>
    </div>
  )
}

  