import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";

function useQuery() {
  let url = useLocation();
  let result = url.split("/");
  let orderID = result[result.length - 1];
  return orderID;
}

export default function orderDetails() {
  const orderID = useQuery();
  const [order, setOrder] = usestate([]);
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/order/${orderID}/order`)
      .then((data) => {
        setOrder(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/${order.userId}`)
      .then(({ data }) => {
        setUser(data);
      })
      .catch((error) => console.log(error));
  });

  function Total() {
    let total = 0;
    order.products.map((producto) => {
      total = total + producto.price * producto.quantity;
    });
    return total;
  }

  return (
    <div>
      <div>
        <ul>
          <li>Cliente:</li>
          <li>Email:</li>
          <li>Direccion:</li>
          <li>Fecha de Inicio:</li>
          <li>Status:</li>
        </ul>
        <ul>
          <li>{user.firstName + " " + user.lastName}</li>
          <li>{user.email}</li>
          <li>{user.shippingAddres}</li>
          <li>{order.createdAt}</li>
          <li>{order.status}</li>
        </ul>
      </div>
      <table>
        <tr>
          <td>Producto</td>
          <td>Precio Unidad</td>
          <td>Cantidad</td>
          <td>Subtotal</td>
        </tr>
        {order.products.length &&
          order.products.map((producto) => {
            return (
              <tr>
                <td>{producto.title}</td>
                <td>{producto.price}</td>
                <td>{producto.quantity}</td>
                <td>{producto.price * producto.quantity}</td>
              </tr>
            );
          })}
      </table>
      <h3>Total</h3>
      <h3>{Total}</h3>
      {/* id userid status createdAt products precio */}
    </div>
  );
}
