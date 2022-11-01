import React from 'react'
import Kilometros from './kilometres/Kilometros'
import Comida from './food/Comida'
import LeerFuncional from './leer/LeerFuncional'
import Presupuesto from './presupuesto/Presupuesto'
import Radical from './ExperienciaRadical/Radical'

export default function RandomTrip() {
  return (
    <div>
        <Kilometros />
        <Comida />
        <LeerFuncional />
        <Presupuesto />
        <Radical />
    </div>
  )
}
