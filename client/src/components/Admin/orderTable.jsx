import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import style from "../../CSS/Admin/orderTable.module.scss";

export default function OrderTable() {
  const [order, setOrder] = useState([]);
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const { push } = useHistory();
  const pageLimit = Math.ceil(order.count / 12);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/order?page=${page}&order=${sort}`)
      .then(({ data }) => {
        setOrder(data);
      });
  }, [page, sort]);

  const handleSort = (e) => {
    let newOrder = JSON.stringify([[e.target.name, "ASC"]]);
    newOrder === sort && (newOrder = JSON.stringify([[e.target.name, "DESC"]]));
    setSort(newOrder);
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
              <td className={style.td}>{order.status}</td>
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
}
