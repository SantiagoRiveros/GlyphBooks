import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import style from "../../CSS/Admin/adminOrderTable.module.scss";

export default function OrderTable() {
  const [order, setOrder] = useState([]);
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(0);
  const { push } = useHistory();
  const pageLimit = Math.ceil(order.count / 12);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API}/order?page=${page}&order=${sort}&admin=true`
      )
      .then(({ data }) => {
        setOrder(data);
      });
  }, [page, sort, status]);

  const handleSort = (e) => {
    let newOrder = JSON.stringify([[e.target.name, "ASC"]]);
    newOrder === sort && (newOrder = JSON.stringify([[e.target.name, "DESC"]]));
    setSort(newOrder);
  };

  const handleChange = (e) => {
    e.preventDefault();
    axios
<<<<<<< HEAD
      .put(`http://localhost:3000/order/${e.target.name}`, {
=======
      .put(`${process.env.REACT_APP_API}/order/${e.target.name}`, {
>>>>>>> 3318f65b5568bbfecaae7aeeaa3306dd005920c1
        status: e.target.value,
      })
      .then(() => {
        setStatus(status + 1);
      });
<<<<<<< HEAD

    return (
      <div className={style.size}>
        <table className={style.orders}>
          <tr>
            <th className={style.th}>
              ID <button name={"id"} onClick={handleSort}></button>
            </th>
            <th className={style.th}>
              User ID <button name={"userId"} onClick={handleSort}></button>
            </th>
            <th className={style.th}>
              Status <button name={"status"} onClick={handleSort}></button>
            </th>
            <th className={style.th}>
              Creation Date{" "}
              <button name={"createdAt"} onClick={handleSort}></button>
            </th>
            <th className={style.th}>Details</th>
          </tr>
          {order.count &&
            order.rows.map((order) => (
              <tr className={style.tr}>
                <td className={style.td}>{order.id}</td>
                <td className={style.td}>{order.userId}</td>
                <td className={style.td}>
=======
  };

  return (
    <div className={style.size}>
      <table className={style.orders}>
        <tr>
          <th className={style.th}>
            ID <button name={"id"} onClick={handleSort}></button>
          </th>
          <th className={style.th}>
            User ID <button name={"userId"} onClick={handleSort}></button>
          </th>
          <th className={style.th}>
            Status <button name={"status"} onClick={handleSort}></button>
          </th>
          <th className={style.th}>
            Creation Date{" "}
            <button name={"createdAt"} onClick={handleSort}></button>
          </th>
          <th className={style.th}>Details</th>
        </tr>
        {order.count &&
          order.rows.map((order) => (
            <tr className={style.tr}>
              <td className={style.td}>{order.id}</td>
              <td className={style.td}>{order.userId}</td>
              <td className={style.td}>
                {order.status === "procesando" ? (
>>>>>>> 3318f65b5568bbfecaae7aeeaa3306dd005920c1
                  <select
                    name={order.id}
                    id="estado"
                    value={order.status}
                    onChange={handleChange}
                  >
<<<<<<< HEAD
                    <option value="carrito">Carrito</option>
                    <option value="creada">Creada</option>
=======
>>>>>>> 3318f65b5568bbfecaae7aeeaa3306dd005920c1
                    <option value="procesando">Procesando</option>
                    <option value="cancelada">Cancelada</option>
                    <option value="completa">Completa</option>
                  </select>
<<<<<<< HEAD
                </td>
                <td className={style.td}>{order.createdAt}</td>
                <td className={style.td}>
                  <button
                    onClick={() => push(`/admin/orderDetails/${order.id}`)}
                  />
                </td>
              </tr>
            ))}
        </table>
        <button
          className={style.Btn}
          disabled={page === 1 || page === "1"}
          onClick={() => setPage(page - 1)}
        >
          Back
        </button>
        <button
          className={style.Btn}
          disabled={parseInt(page) === pageLimit}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    );
  };
=======
                ) : (
                  order.status
                )}
              </td>
              <td className={style.td}>{order.createdAt}</td>
              <td className={style.td}>
                <button
                  className={style.Btn}
                  onClick={() => push(`/admin/orderDetails/${order.id}`)}
                >
                  Detalles
                </button>
              </td>
            </tr>
          ))}
      </table>
      <button
        className={style.Btn}
        disabled={page === 1 || page === "1"}
        onClick={() => setPage(page - 1)}
      >
        Back
      </button>
      <button
        className={style.Btn}
        disabled={parseInt(page) === pageLimit}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
>>>>>>> 3318f65b5568bbfecaae7aeeaa3306dd005920c1
}
