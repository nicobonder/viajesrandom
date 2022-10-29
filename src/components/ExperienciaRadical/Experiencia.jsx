//Pagina que va a ver el usuario y va a cargar el mapa
import React, { useEffect, useState } from 'react'

export default function Experiencia() {
  const lat = Math.random() * (64.9 - -54.40) + -54.40 //de Alaska a Usuhaia
  const [map, setMap] = useState(false)
  const [lon, setLon] = useState(-40)
  
  //const lon = Math.random() * (-150.00 - -38.00) + -38.00; //de Alaska a Brasil
 
  
  // const coordenadas = () => {
  //   //patagonia
  //   const lat = Math.random() * (-34.9 - -54.40) + -54.40 
  //   const lon = Math.random() * (-34.00 - -72.00) + -72.00; //hay margen de error, no deberia caer entre -102 y -72
    
  //   if (lat >= -54.4 && lat <= -34.9){
  //     return (lon >= -72 && lon <= -34)
  //   }

  //   let coord = `${lat},${lon}` 

  //   console.log(lat, lon)
  //   console.log('coord es', coord)
  //   return coord
  // }

  //La 1ra vez lon toma el valor inicial y despues lon da false
  //y si hago setLon>= -72 siempre toma el valor inicial
  useEffect(() => {
    if(lat >= -54.4 && lat <= -34.9){
      setLon(lon >= -72 && lon <= -34)
    } else {
      setLon(lon >= -123 && lon <= -70)
    }
    console.log('lat es ' + lat,'lon es ' + lon)
  },[lat, lon])


/*  const createLon = (lat) =>{
    (props.lat >= -54.4 && props.lat <= -34.9) ? setLon = 54
    : setLon = -70
  }*/

  const handleMap =(e) =>{
    setMap(!map)
  }

  return (
    <div>
        <h1>Bienvenido a una experiencia radical</h1>
        <p>Cuando hagas click en ese botón encontrarás la coordenada exacta de tu próximo destino.</p>
        <button onClick={handleMap}>Buscá tu próximo destino</button>
        <div>
          {map === true ? <iframe title='Google Maps' src={`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`} 
            id='iframeId' height="400px" width="500px"/> 
            : <p>Te animas?</p>}
        </div>
    </div>
  )
}

  