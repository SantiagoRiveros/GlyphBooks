import React, { useState } from "react";
import { agregarAlCarrito, removerCarrito } from "../../actions/actions";
import { connect } from "react-redux";
import style from "../../CSS/cartProduct.module.scss";
import axios from "axios";

function CartProduct(props) {
  const { quantity } = props.producto.lineOrder;
  const handleChange = (num) => {
    let handler = () => {
      if (num === 1) {
        props.dispatch(agregarAlCarrito(props.producto));
      } else {
        props.dispatch(removerCarrito(props.producto, 1));
      }
    };
    if (props.user !== "guest") {
      let { orderId, id } = props.producto.lineOrder;
      axios
        .put(`http://localhost:3000/order/${orderId}/lineorder`, {
          id: id,
          quantity: quantity,
        })
        .then(() => handler());
    } else {
      handler();
    }
  };

  const handleDelete = () => {
    if (props.user !== "guest") {
      let { orderId } = props.producto.lineOrder;
      axios
        .delete(
          `http://localhost:3000/order/${orderId}/lineorder/${props.producto.id}`
        )
        .then(() => {
          props.dispatch(removerCarrito(props.producto, "all"));
        });
    } else props.dispatch(removerCarrito(props.producto, "all"));
  };
  return (
    <div className={style.container}>
      <button onClick={handleDelete}>X</button>
      <h3 className={style.text}>{props.title}</h3>
      <h3 className={style.text}>{props.price}</h3>
      <div>
        <button onClick={() => handleChange()}>-</button>
        <h3>{quantity}</h3>
        <button onClick={() => handleChange(1)}>+</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    carrito: state.cart.items,
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(CartProduct);
