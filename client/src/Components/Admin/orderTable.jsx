import React, { useState, useEffect } from "react";
import axios from "axios";

export default function OrderTable() {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/order").then(({ data }) => {
      setOrder(data);
    });
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>ID:</th>
          <th>User ID</th>
          <th>Status</th>
          <th>Creation Date</th>
          <th>Details</th>
        </tr>
        {order.length &&
          order.map((order) => (
            <tr>
              <th>{order.id}</th>
              <th>User ID</th>
              <th>{order.status}</th>
              <th>{order.date}</th>
              <th>
                <button />
              </th>
            </tr>
          ))}
      </table>
    </div>
  );
}
