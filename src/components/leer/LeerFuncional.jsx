import React, { useState } from 'react'
import s from './LeerFuncional.module.css'

import moneda1 from './moneda1.png'
import moneda2 from './moneda2.png'


export default function LeerFuncional() {
    const [face, setFace] = useState()

    const handleFace = (e) => {
       setFace(Math.round(Math.random()))

    }

  return (
    <div className={s.sectionLeer}>
        <h2 className={s.leerTitle}>Vas a investigar o te vas a dejar sorprender?</h2>
        <p>Tirá la moneda y si te aparece Washington te ponés a leer sobre tu próximo destino, y se te sale la Estatua, te dejás llevar.</p>

        <img className={s.coinImg}  src={face === 0 ? moneda1 : moneda2} alt="cara o cruz" />
        <button className={s.flipBtn} onClick={handleFace}>Lanzame!</button>
        <p>{face === 0 ? "Lee sobre tu destino" : "Dejate sorprender"}</p>
        
    </div>
  )
}
