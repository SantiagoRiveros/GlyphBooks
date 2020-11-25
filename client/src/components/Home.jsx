import React, { useEffect, useState } from "react";
import style from "../CSS/homepage.module.scss";
import bkg from "../template/Images/bkg.jpg";
import axios from "axios";
import Producto from "./Catalogo/productCard";
import { useHistory } from "react-router-dom";

export default function Homepage() {
  const [news, setNews] = useState([]);
  const [first, setFirst] = useState(null);
  const { push } = useHistory();

  useEffect(() => {
    const order = JSON.stringify([["id", "DESC"]]);
    axios
      .get(`http://localhost:3000/products?order=${order}&limit=13`)
      .then(({ data }) => {
        setNews(data.rows.splice(1));
        setFirst(data.rows[0]);
      });
  }, []);
  return (
    <div className={style.page}>
      <img src={bkg} alt="" className={style.bkg} />
      <div className={style.imgLibros}>
        <div className={style.content}>
          <section>
            {first && (
              <img className={style.img} src={first.img} alt="ta roto" />
            )}
          </section>
          <section>
            <h1>
              {first?.title || null}
              <span>nuevo</span>
            </h1>
            <p>{first?.description || null}</p>
            <button onClick={() => push(`/products/${first?.id}`)}>
              Ver más
            </button>
          </section>
        </div>
      </div>
      <div className={style.titulo}>
        <h1>Novedades</h1>
      </div>
      <div className={style.fondo}>
        {news.length &&
          news.map((producto) => {
            return (
              <Producto
                img={producto.img}
                title={producto.title}
                price={producto.price}
                key={producto.id}
                id={producto.id}
                OnClick={() => push(`/productos/${producto.id}`)}
                categories={producto.Categories}
              />
            );
          })}
      </div>
      <div className={style.titulo}>
        <h1 className={style.nov}>Ofertas </h1>
      </div>
      <div className={style.fondo}></div>
    </div>
  );
}
