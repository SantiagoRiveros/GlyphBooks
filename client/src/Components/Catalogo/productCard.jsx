import React from "react";
import { useHistory } from "react-router-dom";
import style from "../../CSS/Product.module.scss";

export default function Product(props) {
  const { push } = useHistory();

  const handleClick = () => {
    props.edit();
    push("/crud");
  };

  return (
    <div className={style.Producto}>
      <div
        className={style.Center}
        onClick={() => push(`/products/${props.id}`)}
      >
        <img
          className={style.Libroimg}
          src={props.img}
          alt="imagen del producto"
        />
        <div className={style.description}>
          <h2 className={style.Price}>${props.price}</h2>
          <h3 className={style.title}>{props.title}</h3>
          <button>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}
