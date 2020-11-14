import React, { useState } from "react";
import style from "../../CSS/carrito.module.css";
import CartProduct from "./cartProduct";
import { removeFromCart } from "../../actions/actions";

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
                <CartProduct title={item.title} price={item.price} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
