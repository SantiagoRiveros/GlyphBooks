import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartProduct from "./cartProduct";
import style from "../../CSS/carrito.module.scss";
import axios from "axios";
import { cerrarCarrito } from "../../actions/actions";

export default function Carrito(props) {
  const open = props.cartShow ? style.sidebarOpen : style.sidebar;
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

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
        .then((res) =>
          Promise.all(
            props.items.map((i) => {
              return axios.put(`http://localhost:3000/products/${i.id}`, {
                stock: i.stock - i.lineOrder.quantity,
              });
            })
          )
        )
        .then(() => dispatch(cerrarCarrito()));
    }
  };

  return (
    <div className={style.container}>
      <div className={open}>
        <ul>
          {props.items.length &&
            props.items.map((item) => (
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
            ))}
        </ul>
        <p className={style.total}>TOTAL: ${total}</p>
        <div className={style.btnContainer}>
          <button className={style.btn} onClick={handleSubmit}>
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
