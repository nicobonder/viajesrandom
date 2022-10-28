//Lo unico que devuelve este componente es un boton que activa todo lo de Presupuesto
import React, { useEffect, useState } from 'react'
import s from './Presupuesto.module.css';

export default function CardPresupuesto(props) {
  const [value, setValue] = useState(0);
  
  useEffect(() => {
    setValue(Math.floor(Math.random() * (props.max - 1) + 1))
}, [props.max])

    const showNumber= () => {
        if(props.showNumber){
            return value
        } else {
            return "❓"
        }
    }

    //El boton esta en Card, esta func activa la func handleCard q defini en Presupuesto
    //y que recibia como parametros id y value.
    //id lo recibo por props y value lo defino en este componente.
    const onClickHandle = (e) => {
        props.handleCard(props.id, value);
    }

    return (
    <div>
         <div className={s.card}>
            <button className={s.sorpresa} onClick={onClickHandle}>{showNumber()}</button>
        </div>
    </div>
  )
}
