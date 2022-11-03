import React, { useEffect, useState } from 'react'
import CardPresupuesto from './CardPresupuesto';
import s from './Presupuesto.module.css'

export default function Presupuesto() {
  const [cards, setCards] = useState({//cada carta empieza con un state false y valor 0
    one: false,
    two: false,
    three: false,
    four: false,
    currentValue: 0
  })

  //sirve para cdo se hace la multiplicac del input * el valor de la carta
  const [total, setTotal] = useState(0);

  //toma el valor del input que es el presup minimo
  const [input, setInput] = useState({
    presupuestoMin: 0
  })

  const handleCard = (id, value) =>{
    const newCards ={
      one: false,
      two: false,
      three: false,
      four: false,
      currentValue: 0
    }

    //al activarse handle card el state de newCards va a ser el opuesto al de cards y su valor va a ser value
    if(!cards[id]){
      newCards[id] = true
      newCards.currentValue = value

      setCards(newCards)
    } 
  }

  //seteo el total. Voy a tener que setear el input con el handleChange y lo multiplico por el valor de la card. El value se establece en Card.
  useEffect(()=> {
    setTotal(input.presupuestoMin * cards.currentValue)
  }, [input.presupuestoMin, cards.currentValue])

  
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className={s.sectionPresupuesto}>
      <h2 className={s.presupuestoTitle}>Elegí tu presupuesto máximo</h2>
      <p>Tu presupesto total va a ser la multiplicación del mínimo que pongas y el número que te toque en la carta que elijas.</p>
      <label className={s.text} htmlFor="presupuestoMin">Tu presupuesto mínimo: </label>
      <input
        className={s.inputPres}
        type='number'
        min={0}
        name='presupuestoMin'
        value={input.presupuestoMin}
        placeholder='Cuál es tu presupuesto mínimo?'
        onChange={handleChange}
        id='presupuestoMin'
      />
        <ul className={s.cards}>
         <CardPresupuesto key='one' id='one' min='0' max='20' showNumber={cards.one} handleCard={handleCard} />
         <CardPresupuesto key='two' id='two' min='0' max='20' showNumber={cards.two} handleCard={handleCard} />
         <CardPresupuesto key='three' id='three' min='0' max='20' showNumber={cards.three} handleCard={handleCard} />
         <CardPresupuesto key='four' id='four' min='0' max='20' showNumber={cards.four} handleCard={handleCard} />
        </ul>
      <div className={s.resultContainer}>
        <h3 className={s.resultado}> Tu presupuesto total es ${total}</h3>
      </div>

    </div>
  )
}
