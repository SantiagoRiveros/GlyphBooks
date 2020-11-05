import React from 'react';
import { BrowserRouter as Router, Switch ,Route ,Link } from "react-router-dom";
import Catalogue from "./components/Catalogue"

export default function Homepage(){
    <div>
    <header>
      <div className="wrapper">
          <div className="logo">
              <img src="logo"/>
          </div>
            <ul className="nav-area">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/catalogo">Catalogo</Link></li>
                <li><Link to="/categorias">Categorias</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/crea tu cuenta">Crea tu cuenta</Link></li>
                <li><Link to="/ingresa">Ingresa</Link></li>
            </ul>
          </div>
      <div className="welcome-text">
          <h1>Laputaquemepario</h1>
          <a href="#">Contactame che</a>
      </div>
      
  </header>
  <div className="catalogue">
      <h1>Ofertas</h1>
      <Catalogue/>
  </div>
  </div>
}