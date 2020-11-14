import React, { useState } from "react";
import style from "../../CSS/cartProduct.module.scss";

export default function CartProduct(props) {
  const [count, setCount] = useState(1);

  const handleCount = (num) => {
    if (count + num > 0) {
      setCount(count + num);
    }
  };

  return (
    <div>
      <button onClick={() => {}}>X</button>
      <h3 classname={style.text}>{props.title}</h3>
      <h3 classname={style.text}>{props.price}</h3>
      <div>
        <button onClick={() => handleCount(-1)}>-</button>
        <h3>{count}</h3>
        <button onClick={() => handleCount(1)}>+</button>
      </div>
    </div>
  );
}
