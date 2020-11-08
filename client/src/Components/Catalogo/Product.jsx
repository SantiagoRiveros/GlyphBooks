import React from "react";
import style from "../../CSS/Product.module.css";

export default function Product(props) {
  return (
    <div className={style.container}>
      <div className={style.details}>
        <div className={style.left}>
          <img
            className={style.imagen}
            src="https://images.cdn3.buscalibre.com/fit-in/360x360/ce/e6/cee6ef96dad70d3f599b953f0e50afc7.jpg"
          />
        </div>
        <div className={style.right}>
          <h3>{props.title} Harry Potter y el prisionero de askaban</h3>
          <textarea rows={5}> soi bien pinche gei</textarea>
          <h3>${props.price} cincuentapeso</h3>
          <h3>{props.stock} Unidades disponibles</h3>
        </div>
      </div>
    </div>
  );
}
