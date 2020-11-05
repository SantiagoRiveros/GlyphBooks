import React from 'react';
import { BrowserRouter as Router, Switch ,Route ,Link } from "react-router-dom";
import Catalogue from "./Catalogo/Catalogue"
import style from '../CSS/homepage.module.css'

export default function Homepage(){
    return(
            <div>
                <div className={style.imgLibros}>
                    <div className="btn">
                        <div className="center">
                        <input type="text"/>
                    </div>
                    </div>
                </div>
                <h1 className="titulo">Ofertas</h1>
                <div className="fondo">
                <Catalogue/>
                </div>
                <h1 className="titulo">Novedades</h1>
                <div className="fondo">
                <Catalogue/>
                </div>
            </div>
    )

}