import React from 'react'
import Comida from './Comida'
import Kilometros from './Kilometros'
import LeerFuncional from './leer/LeerFuncional'
import Presupuesto from './presupuesto/Presupuesto'
import Radical from './ExperienciaRadical/Radical'

export default function RandomTrip() {
  return (
    <div>
        <Kilometros />
        <Comida  />
        <LeerFuncional />
        <Presupuesto />
        <Radical />
    </div>
  )
}
