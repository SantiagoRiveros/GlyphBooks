import React, { useState } from "react";
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
      <div className={style.Center}>
        <img className={style.Libroimg} src={props.img} />
        <div className={style.description}>
          <h2 className={style.title}>{props.title}</h2>
          <h3 className={style.Price}>${props.price}</h3>
        </div>
      </div>
      <button onClick={handleClick}>Edit</button>
    </div>
  );
}
