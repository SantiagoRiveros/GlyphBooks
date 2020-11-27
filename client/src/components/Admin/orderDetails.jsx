import React, { useEffect, useState } from "react";
import ReviewForm from "../Forms/ReviewForm.jsx";
import { useLocation } from "react-router";
import style from "../../CSS/Admin/adminOrderDetails.module.scss";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function useQuery() {
  let url = useLocation();
  let result = url.pathname.split("/");
  let orderID = result[result.length - 1];
  return orderID;
}

export default function OrderDetails() {
  const orderID = useQuery();
  const { push } = useHistory();
  const [order, setOrder] = useState(false);
  const [review, setReview] = useState([]);
  const [show, setShow] = useState(false);

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/order/${orderID}/order`)
      .then(({ data }) => {
        setOrder(data);
        if (data.products) {
          var axiosArr = [];
          data.products.forEach((p) => {
            axiosArr.push(
              axios.get(
                `${process.env.REACT_APP_API}/reviews/${p.id}/${data.user.id}`
              )
            );
          });
          Promise.all(axiosArr).then((r) => {
            setReview(
              r
                .filter((rev) => {
                  return rev.data !== "";
                })
                .map((r) => {
                  return r.data;
                })
            );
          });
        }
      })
      .catch((error) => console.log(error));
  }, [show]);

  function Total() {
    let total = 0;
    order.products.map((producto) => {
      total = total + producto.price * producto.lineOrder.quantity;
    });
    return total;
  }

  function notShow() {
    setShow(false);
  }

  return (
    <div>
      {order ? (
        <div className={style.container}>
          <table className={style.orders}>
            <tr className={style.tr}>
              <th className={style.th}>ID orden</th>
              <th className={style.th}>Cliente</th>
              <th className={style.th} i>
                Email
              </th>
              <th className={style.th}>Direccion</th>
              <th className={style.th}>Fecha de Inicio</th>
              <th className={style.th}>Status</th>
            </tr>
            <tr className={style.tr}>
              <td className={style.td}>{order.id}</td>
              <td className={style.td}>
                {`${order.user.firstName} ${order.user.lastName}`}
              </td>
              <td className={style.td}>{order.user.email}</td>
              <td className={style.td}>{order.user.shippingAdress}</td>
              <td className={style.td}>{order.createdAt}</td>
              <td className={style.td}>{order.status}</td>
            </tr>
          </table>
          <table className={style.orders}>
            <tr className={style.tr}>
              <td className={style.th}>Producto</td>
              <td className={style.th}>Precio Unidad</td>
              <td className={style.th}>Cantidad</td>
              <td className={style.th}>Subtotal</td>
              {order.status === "completa" ? (
                <td className={style.th}>Reseña</td>
              ) : null}
            </tr>
            {order.products.length &&
              order.products.map((producto) => {
                const getReview = (pid, uid) => {
                  var p = review.filter((r) => {
                    return r.productId === pid && uid === r.userId;
                  });
                  if (order.userId === user.id && !p.length) {
                    return (
                      <button
                        className={style.Btn}
                        onClick={() => setShow({ true: true, pid, uid })}
                      >
                        Dejar reseña
                      </button>
                    );
                  } else if (p.length > 0) {
                    return p[0].title;
                  } else {
                    return "el usuario aun no dejo ninguna reseña";
                  }
                };
                return (
                  <tr className={style.tr}>
                    <td className={style.td}>{producto.title}</td>
                    <td className={style.td}>{producto.price}</td>
                    <td className={style.td}>{producto.lineOrder.quantity}</td>
                    <td className={style.td}>
                      {producto.price * producto.lineOrder.quantity}
                    </td>
                    {order.status === "completa" ? (
                      <td className={style.td}>
                        {getReview(producto.id, order.userId)}
                      </td>
                    ) : null}
                  </tr>
                );
              })}
          </table>
          <table>
            <tr className={style.tr}>
              <th className={style.th}>Total</th>
              <th className={style.td}>{Total()}</th>
            </tr>
          </table>
          {/* id userid status createdAt products precio */}
          {show.true ? (
            <div>
              <ReviewForm
                productId={show.pid}
                userId={show.uid}
                notShow={notShow}
                orderId={orderID}
              />
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
