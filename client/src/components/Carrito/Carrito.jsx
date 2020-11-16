import React, { useState } from "react";
import CartProduct from "./cartProduct";
import style from "../../CSS/carrito.module.css";

export default function Carrito(props) {
  const open = props.cartShow ? style.sidebarOpen : style.sidebar;
  const [count, setCount] = useState(1);

  return (
    <div className={style.container}>
      <div className={open}>
        <ul>
          {props.items.length &&
            props.items.map((item) => (
              <li key={item.id}>
                <CartProduct
                  stock={item.stock}
                  title={item.title}
                  price={item.price}
                  producto={item}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
