//Pagina que va a ver el usuario y va a cargar el mapa
import React, { useState } from 'react'
import s from './Experiencia.module.css';
import video from './VideoWorld.mp4';

export default function Experiencia() {
  let lat = Math.random() * (69.9 - -54.40) + -54.40 //de Alaska a Usuhaia
  const [map, setMap] = useState(false)
  //const [lon, setLon] = useState(-40)
  
  let lon = ""
  //Math.random() * (-150.00 - -38.00) + -38.00; //de Alaska a Brasil

  if (lat >= -54.4 && lat <= -34.9){
    const arr = []
      const  ran1= Math.random() * (-57.00 - -72.00) + -72.00
    arr.push(ran1)
      const ran2= Math.random() * (47.00 - -12.00) + -12.00
    arr.push(ran2)
      const ran3= Math.random() * (151.00 - 114.00) + 114.00
    arr.push(ran3)
  
    var randArray = Math.floor(Math.random()*arr.length);
    lon = arr[randArray];
    
      
  } else if(lat >= -34.9 && lat <= 10){
    const arr2 = []
    const  ran1= Math.random() * (-35.00 - -80.00) + -80.00
      arr2.push(ran1)
    const ran2 = Math.random() * (-16.00 - -53.00) + -53.00
      arr2.push(ran2)
    const ran3 = Math.random() * (53.00 - -16.00) + -16.00
    arr2.push(ran3)
    const ran4 = Math.random() * (110.00 - 73.00) + 73.00
    arr2.push(ran4)

    var randArray2 = Math.floor(Math.random()*arr2.length);
    lon = arr2[randArray2];
    
  
    } else if(lat >= 10 && lat <= 21){
      const arr3 = []
      const  ran1= Math.random() * (-87.00 - -103.00) + -103.00
        arr3.push(ran1)
      const ran2 = Math.random() * (50.00 - -14.00) + -14.00 
        arr3.push(ran2)
      const ran3 = Math.random() * (84.00 - 75.00) + 75.00
      arr3.push(ran3)
      const ran4 = Math.random() * (109 - 98.00) + 98.00
      arr3.push(ran4)
  
      var randArray3 = Math.floor(Math.random()*arr3.length);
      lon = arr3[randArray3];
      

  } else if(lat >= 21 && lat <= 33){
    const arr4 = []
    const  ran1= Math.random() * (-80.00 - -117.00) + -117.00
      arr4.push(ran1)
    const ran2 = Math.random() * (59.00 - -16.00) + -16.00 
      arr4.push(ran2)
    const ran3 = Math.random() * (121.00 - -68.00) + -68.00
    arr4.push(ran3)
    
    var randArray4 = Math.floor(Math.random()*arr4.length);
    lon = arr4[randArray4];
    


  } else if(lat >= 33 && lat <= 52){
    const arr5 = []
    const  ran1= Math.random() * (-58 - -127.00) + -127.00
      arr5.push(ran1)
    const ran2 = Math.random() * (143.00 - -7.00) + -7 
      arr5.push(ran2)
    
    var randArray5 = Math.floor(Math.random()*arr5.length);
    lon = arr5[randArray5];
    

  } else if(lat >= 52 && lat <= 69.9){
    const arr6 = []
      const  ran1= Math.random() * (-83.90 - -155.00) + -155.00
        arr6.push(ran1)
      const ran2 = Math.random() * (-30 - -49.00) + -49 
        arr6.push(ran2)
      const ran3 = Math.random() * (1135 - -7.00) + -7
      arr6.push(ran3)
      const ran4 = Math.random() * (176.00 - 155.00) + 155
      arr6.push(ran4)
  
      var randArray6 = Math.floor(Math.random()*arr6.length);
      lon = arr6[randArray6];
  }

  const handleMap =(e) =>{
    setMap(!map)
  }

  return (
    <div className={s.experienceSection}>
        <h1 className={s.destinyTitle}>Bienvenido a una experiencia radical</h1>
        {/*<p>Cuando hagas click en ese botón encontrarás la coordenada exacta de tu próximo destino.</p>*/}
        <button className={s.destinyBtn} onClick={handleMap}>Buscá tu próximo destino</button>
        <div>
          {map === true ? <iframe className={s.frame} title='Google Maps' src={`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`} 
            id='iframeId' height="380px" width="470px"/> 
            : <video className={s.videoWorld} autoPlay loop muted>
              <source src={video} type="video/mp4"/>
            </video>}
        </div>
    </div>
  )
}

  