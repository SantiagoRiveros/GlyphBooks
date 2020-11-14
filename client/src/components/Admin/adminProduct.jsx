import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "../../CSS/catalogue.module.scss";
import { useHistory } from "react-router-dom";

export default function AdminProduct({ setProducto }) {
  const { push } = useHistory();
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/products").then(({ data }) => {
      setProductos(data);
    });
  }, []);
  return (
    <div>
      <div className={style.Btns}>
        <button
          className={style.Button}
          name="crud"
          onClick={() => push("/admin/crud")}
        >
          NUEVO PRODUCTO
        </button>
        <button
          className={style.Button}
          name="newCategory"
          onClick={() => push("/admin/newCategory")}
        >
          NUEVA CATEGORÍA
        </button>
      </div>
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
                <button
                  onClick={() => {
                    setProducto(product);
                    push("/admin/crud");
                  }}
                />
              </th>
            </tr>
          ))}
      </table>
    </div>
  );
}
