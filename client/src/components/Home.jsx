import React from "react";
import Footer from "./Footer";
import style from "../CSS/homepage.module.scss";

export default function Homepage() {
  return (
    <div className={style.tamaño}>
      <div className={style.imgLibros}>
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
