import React, { useState } from "react";
import style from "../../CSS/carrito.module.css";
import { removeFromCart } from "../../actions/actions";

export default function Carrito() {
  const [show, setShow] = useState(false);
  const open = show ? style.sidebarOpen : style.sidebar;

  return (
    <div className={style.container}>
      <div className={open}>
        <div className={style.togglebtn}>
          <button onClick={() => setShow((prevShow) => !prevShow)}>
            toggloe show
          </button>
        </div>
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
        </ul>
        <button onClick={() => removeFromCart()}>X</button>
      </div>
    </div>
  );
}
