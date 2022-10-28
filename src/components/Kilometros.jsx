import React, { useState } from 'react'
import s from './kilometros.module.css';

export function validate(input) {
    let error = {
      min: "",
      max: ""
    };
  if (!input.min) {
    error.min = 'Necesitás poner un número';
  } else if (!/^[0-9]{1,3}$/.test(input.min)) {
    error.min = 'Tiene que ser un número entre 1 y 999';
  } 
  
  if(!input.max) {
    error.max = 'Necesitás poner un número';
  } else if (!/^[0-9]{1,3}$/.test(input.max)) {
    error.max = 'Tiene que ser un número entre 1 y 999';
  } else if (input.max <= input.min) {
    error.max = 'El máximo tiene que ser mayor al mínimo';
  }
  console.log(error)
  return error;
  }

export default function Kilometros() {
    const [input, setInput] = useState({
        min: "",
        max: ""
    });
    const [rand, setRand] = useState(0)
    const [error, setError] = useState({});

    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submitiste el formulario")
    }


    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });

        setError(validate({
            ...input,
            [e.target.name]: e.target.value
          }))
    };

  return (
    <div id={s.sectionKm}>
        <h2>Kilometros aleatorios</h2>
        <p>En esta sección vamos a establecer cuántos kilómetros deberías llegar a tu próximo destino.</p>
        <form onSubmit={handleSubmit}>
            <p>Primero decinos cuántos kilómetros querés viajar como mínimo y como máximo. Después hace click en Calcular</p> {/*Esto podria estar en un promt o algo q aparezca cdo el usuario toca un ?*/}
            <div className={s.inputs}>
                <label htmlFor="min">Kilómetros mínimos</label>
                <input 
                    type="text" 
                    name='min' 
                    value={input.min}
                    placeholder='Escribí un número'
                    onChange={handleInputChange}
                    className={error.min && s.danger}
                    id="minId"
                />
                {error.min && (
                    <p className="danger">{error.min}</p>
                )}
                <label htmlFor="max">Kilómetros máximos</label>
                <input 
                    type="text" 
                    name='max'
                    value={input.max}
                    placeholder='Escribí un número' 
                    //onChange={handleInputChange}//el valor de aca tiene que establecer el maximo en el math.random
                    onChange={handleInputChange}
                    className={error.max && s.danger}
                    id="maxId" 
                />
                {error.max && (
                    <p className="danger">{error.max}</p>
                )}
            </div>
            <button disabled={ !input.min || !input.max || !(input.min < input.max)  /*</form>* Object.keys(error).length !== 0 ESTO NO FUNCIONA BIEN*/
        } onClick={() => setRand(Math.floor(Math.random() * (input.max - input.min) + input.min))}>Calcular</button> {/*calcular un numero random*/}
            <h3>Tenés que viajar :</h3>
             {<p id={s.show}>{rand} kilómetros</p> } {/*Muestro la cantidad de km*/}

        </form>
    </div>
  )
}
