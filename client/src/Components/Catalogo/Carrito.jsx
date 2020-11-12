import React from "react";
import style from "../../CSS/carrito.module.css";

export default function Carrito(props) {
  const open = props.cartShow ? style.sidebarOpen : style.sidebar;
  return (
    <div className={style.container}>
      <div className={open}>
        <div className={style.togglebtn}>
          <button onClick={props.onCartClick}>toggloe show</button>
        </div>
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
        </ul>
      </div>
    </div>
  );
}
