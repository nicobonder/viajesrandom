import React from 'react'
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'


export default function Navbar() {

  return (
    <div className={s.navbarSection}>
    <nav className={s.links}>
        <NavLink className={s.link} to='trip'>Viaje Random</NavLink>
        <NavLink className={s.link} to='experience'>Tu destino</NavLink>
      </nav>
    </div>
  )
}
