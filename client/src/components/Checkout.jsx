import React, { useReducer, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { cerrarCarrito } from "../actions/actions";
import OrderDetails from "./Admin/orderDetails.jsx";

export default function Checkout(props) {
  const [check, setCheck] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [input, setInput] = useState("");
  const { push } = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    axios
      .put(`http://localhost:3000/users/${user.id}`, { shippingAdress: input })
      .then(({ data }) => {
        props.setLocalUser({ ...props.localUser, user: data });
        push("/catalogo");
      });
  };

  const handleCart = () => {
    const { orderId } = props.items[0].lineOrder;
    if (user.id) {
      axios
        .put(`http://localhost:3000/users/${user.id}/cart`, {
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
        .then(() => {
          dispatch(cerrarCarrito());
        });
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <OrderDetails />
      <div>
        <input
          onChange={() => {
            setCheck(!check);
            setInput(user.shippingAdress);
          }}
          type="checkbox"
        />
        <h3>¿Deseas usar una direccion distinta?</h3>
      </div>
      {check && (
        <input onChange={handleChange} type="text" value={input}></input>
      )}
      <button
        onClick={() => {
          handleCart();
          handleSubmit();
        }}
      >
        ¡COMPRAR!
      </button>
    </div>
  );
}