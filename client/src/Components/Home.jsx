import React from 'react';
import { BrowserRouter as Router, Switch ,Route ,Link } from "react-router-dom";
import Catalogue from "./Catalogo/Catalogue"
import style from "../CSS/homepage.module.scss";

export default function Homepage(){
    return(
            <div>
                <div className={style.imgLibros}>
                    <div className={style.btn}>
                        <div className={style.center}>
                        <h2 className={style.buscador}>¿Que estas buscando?</h2>
                        <input defaultValue={"Ingresa tu busqueda"} className={style.input} type={style.text}/>
                    </div>
                    </div>
                </div>
                <div className={style.titulo}>
                <h1>Ofertas</h1>
                </div>
                <div className={style.fondo}>
                <Catalogue/>
                </div>
                <div className={style.titulo}>
                <h1>Novedades</h1>
                </div>
                <div className={style.fondo}>
                <Catalogue/>
                </div>
            </div>
    )

}