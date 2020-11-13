import React, { useState } from "react";
import style from "../../CSS/carrito.module.css";
import axios from "axios";
import store from "../../store/index";
import { addToCart, removeFromCart } from "../../actions/actions"

export default function ItemCarrito(props) {
  const [count, setCount] = useState(1);

  return (
      <div>
        <ul>
          <li>{props.title}</li>
          <li>{props.price}</li>
          <li>
          {count}
          <button disabled={count === 1 || count === "1"} onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(count + 1)}>+</button>
          </li>
          <li>D</li>
        </ul>
        <button onClick={() => removeFromCart()}>X</button>
      </div>
  );
}
