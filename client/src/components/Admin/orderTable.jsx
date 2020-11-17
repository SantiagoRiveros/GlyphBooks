import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "../../CSS/Admin/orderTable.module.scss";

export default function OrderTable() {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/order").then(({ data }) => {
      setOrder(data);
    });
  }, []);

  return (
    <div className={style.size}>
      <table className={style.orders}>
        <tr>
          <th className={style.th}>ID</th>
          <th className={style.th}>User ID</th>
          <th className={style.th}>Status</th>
          <th className={style.th}>Creation Date</th>
          <th className={style.th}>Details</th>
        </tr>
        {order.length &&
          order.map((order) => (
            <tr className={style.tr}>
              <td className={style.td}>{order.id}</td>
              <td className={style.td}>User ID</td>
              <td className={style.td}>{order.status}</td>
              <td className={style.td}>{order.createdAt}</td>
              <td className={style.td}>
                <button />
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}
