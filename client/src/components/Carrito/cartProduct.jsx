import React, { useState } from "react";
import { agregarAlCarrito, removerCarrito } from "../../actions/actions";
import { connect } from "react-redux";
import style from "../../CSS/cartProduct.module.scss";

function CartProduct(props) {
  const quantity = id => {
    for (var i = 0; i < props.carrito.length; i++) {
      if(props.carrito[i].id === id) {
        return props.carrito[i].cantidad
      }
    }
  }
  return (
    <div>
      <button onClick={() => props.dispatch(removerCarrito(props.producto, "all"))}>
        X
      </button>
      <h3 className={style.text}>{props.title}</h3>
      <h3 className={style.text}>{props.price}</h3>
      <div>
        <button onClick={() => props.dispatch(removerCarrito(props.producto, 1))}>-</button>
        <h3>{quantity(props.producto.id)}</h3>
        <button onClick={() => props.dispatch(agregarAlCarrito(props.producto))}>+</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    carrito: state.cart.items
  }
}

export default connect(mapStateToProps)(CartProduct);
