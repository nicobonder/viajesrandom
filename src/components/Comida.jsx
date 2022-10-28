import React, {Component} from 'react'
//import s from './Comida.module.css';
import './Comida.css'

export default class Comida extends Component {
  state ={
    name: "ruleta"
  };

  startRotation = () => {
    this.setState({
      name: "ruleta start-rotate",
    });
    setTimeout(() => {
      this.setState({
        name: "ruleta start-rotate stop-rotate",
      });
    }, Math.floor(Math.random() *  (4000 - 1000) + 1000));
  };



  render() {
    return (
      <div id='sectionComida'>
        <h2 className='foodTitle'>¿Qué vas a comer?</h2>
        <div className="arrow"></div>
        <ul className={this.state.name}> 
            <li className='lista'>
              <div className='opcion'
              contentEditable="true"
              spellCheck="false">Regional</div>
            </li>
          <li className='lista'>
            <div className='opcion'
              contentEditable="true"
              spellCheck="false">Minutas</div>
          </li>
          <li className='lista'>
            <div className='opcion'
              contentEditable="true"
              spellCheck="false">De nuevo</div></li>
          <li className='lista'>
            <div className='opcion'
              contentEditable="true"
              spellCheck="false">Street food</div>
          </li>
          <li className='lista'>
            <div className='opcion'
              contentEditable="true"
              spellCheck="false">Fastfood</div>
          </li>
          <li className='lista'>
              <div className='opcion'
              contentEditable="true"
              spellCheck="false">Minutas</div>
            </li>
          <li className='lista'>
            <div className='opcion'
              contentEditable="true"
              spellCheck="false">Regional</div>
          </li>
          <li className='lista'>
            <div className='opcion'
              contentEditable="true"
              spellCheck="false">Libre</div></li>
          <li className='lista'>
            <div className='opcion'
              contentEditable="true"
              spellCheck="false">Vianda</div>
          </li>
          <li className='lista'>
            <div className='opcion'
              contentEditable="true"
              spellCheck="false">De nuevo</div>
          </li>
          <li className='lista'>
            <div className='opcion'
              contentEditable="true"
              spellCheck="false">Fastfood</div>
          </li>
          <li className='lista'>
            <div className='opcion'
              contentEditable="true"
              spellCheck="false">Street food</div>
          </li>
        </ul>
        <button onClick={this.startRotation} className='spinBtn'>GIRAR</button>
      </div>
    
    )
  }
}


/*export default function Comida() {
  let [clase, setClase] = useState({
    name: "s.ruleta"
  });

  

  let startRotation = () => {
    console.log("hiciste click!!")
    setClase({
      name: "s.ruleta s.start-rotate"
    });
    setTimeout(() => {
      setClase({
        name: "s.ruleta  s.stop-rotate"
      });
    }, Math.floor(Math.random() * 10000) + 1);
  }

  return (
    <div id={s.sectionComida}>
      <h2 className={s.foodTitle}>¿Qué vas a comer?</h2>
        <div className={s.arrow}></div>
      
      <div>
        <ul className={s.startrotate}> {/* PODRIA VER SI PUEDO HACER QUE LA CLASE SE PONGA DE FOMA CONDICIONAL}
          /*<li className={s.lista}>
              <div className={s.opcion}
              contentEditable="true"
              spellCheck="false">Regional</div>
            </li>
          <li className={s.lista}>
            <div className={s.opcion}
              contentEditable="true"
              spellCheck="false">Minutas</div>
          </li>
          <li className={s.lista}>
            <div className={s.opcion}
              contentEditable="true"
              spellCheck="false">De nuevo</div></li>
          <li className={s.lista}>
            <div className={s.opcion}
              contentEditable="true"
              spellCheck="false">Street food</div>
          </li>
          <li className={s.lista}>
            <div className={s.opcion}
              contentEditable="true"
              spellCheck="false">Fastfood</div>
          </li>
          <li className={s.lista}>
              <div className={s.opcion}
              contentEditable="true"
              spellCheck="false">Minutas</div>
            </li>
          <li className={s.lista}>
            <div className={s.opcion}
              contentEditable="true"
              spellCheck="false">Regional</div>
          </li>
          <li className={s.lista}>
            <div className={s.opcion}
              contentEditable="true"
              spellCheck="false">Libre</div></li>
          <li className={s.lista}>
            <div className={s.opcion}
              contentEditable="true"
              spellCheck="false">Vianda</div>
          </li>
          <li className={s.lista}>
            <div className={s.opcion}
              contentEditable="true"
              spellCheck="false">De nuevo</div>
          </li>
          <li className={s.lista}>
            <div className={s.opcion}
              contentEditable="true"
              spellCheck="false">Fastfood</div>
          </li>
          <li className={s.lista}>
            <div className={s.opcion}
              contentEditable="true"
              spellCheck="false">Street food</div>
          </li>
        </ul>
        <button onClick={startRotation} className={s.spinBtn}>GIRAR</button>
      </div>
    </div>
  )
}*/
