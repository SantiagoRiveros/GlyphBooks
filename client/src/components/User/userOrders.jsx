import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserOrders({ user }) {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/${user.id}/orders`).then(({ data }) => {
      setOrder(data);
    });
  }, []);
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Status</th>
          <th>Creation Date</th>
        </tr>
        {order.length &&
          order.map((orden) => {
            <tr>
              <th>{orden.id}</th>
              <th>{orden.status}</th>
              <th>{orden.createdAt}</th>
            </tr>;
          })}
      </table>
    </div>
  );
}
