import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartProduct from "./cartProduct";
import style from "../../CSS/carrito.module.css";
import axios from "axios";
import { cerrarCarrito } from "../../actions/actions";

export default function Carrito(props) {
  const open = props.cartShow ? style.sidebarOpen : style.sidebar;
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const idUser = useSelector((state) => state.user.user.id);

  const handleDelete = () => {
    if (idUser) {
      axios
        .delete(`http://localhost:3000/users/${idUser}/cart`)
        .then(() => dispatch(cerrarCarrito()));
    } else {
      dispatch(cerrarCarrito());
    }
  };

  const handleSubmit = () => {
    const { orderId } = props.items[0].lineOrder;
    if (idUser) {
      axios
        .put(`http://localhost:3000/users/${idUser}/cart`, {
          orderId,
          status: "procesando",
        })
        .then(() => dispatch(cerrarCarrito()));
    }
  };

  return (
    <div className={style.container}>
      <div className={open}>
        <div>
          <button onClick={handleSubmit}>finalizar</button>
          <button onClick={handleDelete}>eliminar</button>
        </div>
        <ul>
          {props.items.length &&
            props.items.map((item) => (
              <li key={item.id}>
                <CartProduct
                  key={item.id}
                  stock={item.stock}
                  title={item.title}
                  price={item.price}
                  producto={item}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
