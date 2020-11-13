import React, { useEffect, useState } from "react";
import axios from "axios";

export default function adminProduct({ setProducto }) {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/products").then(({ data }) => {
      setProductos(data);
    });
  }, []);
  return (
    <div>
      <table>
        <tr>
          <th>Nombre:</th>
          <th>Descripcion:</th>
          <th>Precio:</th>
          <th>Stock:</th>
          <th>+Agregar:</th>
        </tr>
        {productos.length &&
          productos.map((product) => (
            <tr>
              <th>{product.title}</th>
              <th>{product.description}</th>
              <th>{product.price}</th>
              <th>{product.stock}</th>
              <th>
                <button />
              </th>
            </tr>
          ))}
      </table>
    </div>
  );
}
