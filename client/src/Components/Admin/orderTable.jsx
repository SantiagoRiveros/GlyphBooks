import React, { useState } from "react";

export default function orderTable() {
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
          order.map((orden) => (
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
