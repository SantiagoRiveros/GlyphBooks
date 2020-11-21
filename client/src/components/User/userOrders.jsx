import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function UserOrders({ user }) {
  const [order, setOrder] = useState([]);
  const { push } = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${user.id}/orders`)
      .then(({ data }) => {
        setOrder(data);
      });
  }, [user]);
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Status</th>
          <th>Creation Date</th>
          <th>Details</th>
        </tr>
        {order.length &&
          order.map((orden) => (
            <tr>
              <th>{orden.id}</th>
              <th>{orden.status}</th>
              <th>{orden.createdAt}</th>
              <th>
                <button
                  onClick={() => push(`/cuenta/orderDetails/${orden.id}`)}
                >
                  O
                </button>
              </th>
            </tr>
          ))}
      </table>
    </div>
  );
}
