import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";

function useQuery() {
  let url = useLocation();
  let result = url.pathname.split("/");
  let orderID = result[result.length - 1];
  return orderID;
}

export default function OrderDetails() {
  const orderID = useQuery();
  const [order, setOrder] = useState(false);
  const [review, setReview] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/order/${orderID}/order`)
      .then(({ data }) => {
        setOrder(data);
        if( data.products ) {
          var axiosArr = [];
          data.products.forEach((p) => {
            axiosArr.push(axios.get(`http://localhost:3000/reviews/${p.id}/${data.user.id}`))
          })
          Promise.all(axiosArr)
          .then(r => {
            setReview(r.filter(rev => {
              return rev.data !== ""
            }).map(r => { return r.data}))
          })
        }
      })
      .catch((error) => console.log(error));
  }, []);


  function Total() {
    let total = 0;
    order.products.map((producto) => {
      total = total + producto.price * producto.lineOrder.quantity;
    });
    return total;
  }

  return (
    <div>
      {order ? (
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
              <li>{order.user.firstName + " " + order.user.lastName}</li>
              <li>{order.user.email}</li>
              <li>{order.user.shippingAdress}</li>
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
              <td>Reseña</td>
            </tr>
            {order.products.length &&
              order.products.map((producto) => {
                const getReview = (pid, uid) => {
                  var p = review.filter(r => { 
                    return r.productId === pid && uid === r.userId 
                  })
                  if ( p.length > 0 ) {
                    return p[0].title
                  } else {
                    return 1
                  }
                }
                return (
                  <tr>
                    <td>{producto.title}</td>
                    <td>{producto.price}</td>
                    <td>{producto.lineOrder.quantity}</td>
                    <td>{producto.price * producto.lineOrder.quantity}</td>
                    <td>{getReview(producto.id, order.user.id)}</td>
                  </tr>
                );
              })}
          </table>
          <h3>Total</h3>
          <h3>{Total()}</h3>
          {/* id userid status createdAt products precio */}
        </div>
      ) : null}
    </div>
  );
}
