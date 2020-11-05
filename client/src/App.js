import React, { useState } from 'react';
import Catalogue from "./components/Catalogue"
import './navbar.css';
import Catalogo from "./routing/Catalogo.jsx"
import { BrowserRouter as Router, Switch ,Route ,Link } from "react-router-dom";



function App() {

  return (
    <div>
      <nav>
        <img className="imgLogo" src="https://media.discordapp.net/attachments/772911955349340171/773583574975774780/Glyphbooks1.png?width=1017&height=671"/>
        <ul>
          <li><a className="active" href="#">Home</a></li>
          <li><a href="#">Catalogo</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Ingresar</a></li>
          <li><a href="#">Carrito</a></li>
        </ul>
        <div className="btn">
          <div className="center">
              <input type="text"/>
          </div>

        </div>
      </nav>
      <div className="imgLibros"></div>
      
      <h1>Ofertas</h1>
      <div className="catalogo">
        <Catalogue/>
      </div>

    </div>
  )
}

export default App;
