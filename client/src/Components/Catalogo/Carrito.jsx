import React from "react";
import style from "../../CSS/carrito.module.css";

export default function Carrito(props) {
  const open = props.cartShow ? style.sidebarOpen : style.sidebar;
  return (
    <div className={style.container}>
      <div className={open}>
        <ul>
          <li>
            hola que tal soy el chico de las poesias tu fiel admirador y aunque
            no me conocias
          </li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
        </ul>
      </div>
    </div>
  );
}
