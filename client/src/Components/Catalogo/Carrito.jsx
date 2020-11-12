import React, { useState } from "react";
import style from "../../CSS/carrito.module.css";

export default function Carrito(props) {
  const open = props.cartShow ? style.sidebarOpen : style.sidebar;
  const [count, setCount] = useState(1);
  return (
    <div className={style.container}>
      <div className={open}>
        <ul>
          <li>{props.title}</li>
          <li>{props.price}</li>
          <li>
          {count}
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(count + 1)}>+</button>
          </li>
          <li>D</li>
        </ul>
        <button>X</button>
      </div>
    </div>
  );
}
