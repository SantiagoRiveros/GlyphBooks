import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartProduct from "./cartProduct";
import style from "../../CSS/carrito.module.scss";
import axios from "axios";
import { cerrarCarrito } from "../../actions/actions";

export default function Carrito(props) {
  const open = props.cartShow ? style.sidebarOpen : style.sidebar;
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const { push } = useHistory();

  const idUser = useSelector((state) => state.user.user?.id);

  useEffect(() => {
    if (props.items.length) {
      setTotal(
        props.items
          .map((i) => i.price * i.lineOrder.quantity)
          .reduce((acc, cur) => acc + cur)
      );
    } else {
      setTotal(0);
    }
  }, [props.items]);

  const handleDelete = () => {
    if (idUser && props.items.length) {
      axios
        .delete(`${process.env.REACT_APP_API}/users/${idUser}/cart`)
        .then(() => dispatch(cerrarCarrito()));
    } else {
      dispatch(cerrarCarrito());
    }
  };

  const handleFinalizar = () => {
    if (props.items.length) {
      const { orderId } = props.items[0].lineOrder;
      push(`/checkout/${orderId}`);
    }
  };

  return (
    <div className={style.container}>
      <div className={open}>
        <ul>
          {props.items.length
            ? props.items.map((item) => (
                <li key={item.id}>
                  <CartProduct
                    key={item.id}
                    stock={item.stock}
                    title={item.title}
                    img={item.img}
                    price={item.price}
                    producto={item}
                  />
                </li>
              ))
            : null}
        </ul>
        <p className={style.total}>TOTAL: ${total}</p>
        <div className={style.btnContainer}>
          <button className={style.btn} onClick={handleFinalizar}>
            finalizar
          </button>
          <button className={style.btn} onClick={handleDelete}>
            eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
