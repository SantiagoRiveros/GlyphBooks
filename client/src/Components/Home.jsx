import React from "react";
import Footer from "./Footer";
import style from "../CSS/homepage.module.scss";

export default function Homepage() {
  return (
    <div>
      <div className={style.imgLibros}>
        <div className={style.btn}>
          <div className={style.center}>
            <h2 className={style.buscador}>¿Que estas buscando?</h2>
            <input
              placeholder="Ingresa tu busqueda"
              className={style.input}
              type={style.text}
            />
          </div>
        </div>
      </div>
      <div className={style.titulo}>
        <h1>Ofertas</h1>
      </div>
      <div className={style.fondo}></div>
      <div className={style.titulo}>
        <h1 className={style.nov}>Novedades</h1>
      </div>
      <div className={style.fondo}></div>
      <Footer />
    </div>
  );
}
