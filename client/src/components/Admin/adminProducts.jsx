import React, { useState, useEffect } from "react";
import axios from "axios";
export default function AdminProducts() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then(({ data }) => {
        setProductos(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        {productos.length &&
          productos.map((p) => {
            return <li>{p.title}</li>;
          })}
      </ul>
    </div>
  );
}
