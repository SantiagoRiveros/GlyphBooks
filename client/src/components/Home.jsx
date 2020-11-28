import React, { useEffect, useState } from "react";
import style from "../CSS/homepage.module.scss";
import axios from "axios";
import Producto from "./Catalogo/productCard";
import { useHistory } from "react-router-dom";
import banner from "../template/Images/banner.jpg";

export default function Homepage() {
  const [news, setNews] = useState([]);
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [third, setThird] = useState(null);
  const { push } = useHistory();

  useEffect(() => {
    const order = JSON.stringify([["id", "DESC"]]);
    axios

      .get(`${process.env.REACT_APP_API}/products?order=${order}&limit=15`)

      .then(({ data }) => {
        setNews(data.rows.splice(3));
        setFirst(data.rows[0]);
        setSecond(data.rows[1]);
        setThird(data.rows[2]);
      });
  }, []);
  return (
    <div className={style.home}>
      <div className={style.page}>
        <div className={style.banner}>
          <blockquote>
            La lectura de un buen libro es un diálogo incesante en que el libro
            habla y el alma contesta
          </blockquote>
          <h4> André Maurois </h4>
          <img className={style.imgn} src={banner} alt="banner" />
        </div>
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
          <div className={style.content2}>
            <section>
              {second && (
                <img className={style.img} src={second.img} alt="ta roto" />
              )}
            </section>
            <section>
              <h1>
                {second?.title || null}
                <span>nuevo</span>
              </h1>
              <p>{second?.description || null}</p>
              <button onClick={() => push(`/products/${second?.id}`)}>
                Ver más
              </button>
            </section>
          </div>
        </div>
      </div>
      <div className={style.titulo}>
        <h1>Añadidos recientemente</h1>
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
      <div className={style.contcont}>
        <div className={style.content3}>
          <section>
            {third && (
              <img className={style.img} src={third.img} alt="ta roto" />
            )}
          </section>
          <section>
            <h1>
              {third?.title || null}
              <span>nuevo</span>
            </h1>
            <p>{third?.description || null}</p>
            <button onClick={() => push(`/products/${third?.id}`)}>
              Ver más
            </button>
          </section>
        </div>
      </div>
      <div className={style.titulo}>
        <h1>Ofertas</h1>
      </div>
      <div className={style.fondo}></div>
    </div>
  );
}
