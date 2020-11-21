import React from "react";
import Footer from "./Footer";
import style from "../CSS/homepage.module.scss";
import bkg from "../template/Images/bkg.jpg";

export default function Homepage() {
  return (
    <div className={style.page}>
      <img src={bkg} alt="" className={style.bkg} />
      <div className={style.imgLibros}>
        <div className={style.content}>
          <section>
            <img
              className={style.img}
              src="https://books.google.com/books/content/images/frontcover/oU9cCgAAQBAJ?fife=w400-h600"
              alt=""
            />
          </section>
          <section>
            <h1>
              Alicia en el pais de las maravillas
              <span>nuevo</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit commodo,
              elementum malesuada posuere torquent enim orci potenti, sed
              ultricies mi dis donec ultrices massa. Semper quis imperdiet sem
              primis dignissim platea nibh convallis turpis, faucibus aliquet
              vehicula blandit vel risus suspendisse. Elementum sagittis at
              vivamus netus scelerisque facilisi vestibulum justo dis luctus,
              quis mus integer a senectus lectus diam vel accumsan, aliquam
              iaculis egestas bibendum maecenas faucibus mauris fermentum
              rutrum.
            </p>
            <button>Ver más</button>
          </section>
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
