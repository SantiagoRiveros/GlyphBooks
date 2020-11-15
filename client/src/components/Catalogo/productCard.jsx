import React from "react";
import { useHistory } from "react-router-dom";
import style from "../../CSS/Product.module.scss";

export default function Product(props) {
  const { push } = useHistory();

  return (
    <div className={style.Producto}>
      <div className={style.Center}>
        <img
          className={style.Libroimg}
          src={props.img}
          alt="imagen del producto"
          onClick={() => push(`/products/${props.id}`)}
        />
        <div className={style.description}>
          <h2 className={style.Price}>${props.price}</h2>
          <h3 className={style.title}>{props.title}</h3>
        </div>
        <button onClick={() => push(`/products/${props.id}`)} className={style.Button}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
