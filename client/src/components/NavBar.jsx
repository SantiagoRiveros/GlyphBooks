import React from 'react'
import { BrowserRouter as Router, Switch ,Route ,Link } from "react-router-dom";
import style from '../CSS/navbar.module.css'

export default function NavBar(){
    return(
        <nav>
        <img className={style.imgLogo} src="https://media.discordapp.net/attachments/772911955349340171/773903872740556820/Logo_horizontal.png?width=1443&height=338"/>
        <ul>
          <li><Link className={style.active} exact to="/">Home</Link></li>
          <li><Link to="/catalogo">Catalogo</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/ingresar">Ingresar</Link></li>
          <li><Link to="/carrito">Carrito</Link></li>
        </ul>
      </nav>
    )
    
}