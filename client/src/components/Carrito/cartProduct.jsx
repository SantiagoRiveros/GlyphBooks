import React, { useState } from "react";
import { removerCarrito } from "../../actions/actions";
import { connect } from "react-redux";
import style from "../../CSS/cartProduct.module.scss";

function CartProduct(props) {
  const [count, setCount] = useState(1);

  const handleCount = (num) => {
    if (count + num > 0) {
      setCount(count + num);
    }
  };

  return (
    <div>
      <button onClick={() => props.dispatch(removerCarrito(props.producto))}>X</button>
      <h3 classname={style.text}>{props.title}</h3>
      <h3 classname={style.text}>{props.price}</h3>
      <div>
        <button onClick={() => handleCount(-1)}>-</button>
        <h3>{count}</h3>
        <button onClick={() => handleCount(1)}>+</button>
      </div>
    </div>
  );
};

export default connect()(CartProduct);
