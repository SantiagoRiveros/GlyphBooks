import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import style from "../../CSS/Admin/orderTable.module.scss";

export default function OrderTable() {
  const [order, setOrder] = useState([]);
  const { push } = useHistory();
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
    </div>
  );
}
