import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import style from "../../CSS/catalogue.module.scss";
import Pagination from "../Catalogo/pagination.jsx";

export default function AdminProduct({ setProducto }) {
  const [productos, setProductos] = useState([]);
  const { push } = useHistory();
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
          onClick={() => push("/crud")}
        >
          NUEVO PRODUCTO
        </button>
        <button
          className={style.Button}
          name="newCategory"
          onClick={() => push("/newCategory")}
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
          <th>Editar:</th>
        </tr>
        {productos.length &&
          productos.map((product) => (
            <tr>
              <th>{product.title}</th>
              <th>{product.description}</th>
              <th>{product.price}</th>
              <th>{product.stock}</th>
              <th>
                <button>+</button>
              </th>
            </tr>
          ))}
      </table>
      <Pagination />
    </div>
  );
}
