import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "../../CSS/Admin/adminProduct.module.scss";
import { useHistory } from "react-router-dom";

export default function AdminProduct({ setProducto }) {
  const { push } = useHistory();
  const [productos, setProductos] = useState([]);
  const [page, setPage] = useState(1);
  const pageLimit = Math.ceil(productos.count / 9);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products?page=${page}`)
      .then(({ data }) => {
        setProductos(data);
      });
  }, [page]);
  return (
    <div className={style.size}>
      <div className={style.btns}>
        <button
          className={style.button}
          name="crud"
          onClick={() => push("/admin/crud")}
        >
          NUEVO PRODUCTO
        </button>
        <button
          className={style.button}
          name="newCategory"
          onClick={() => push("/admin/newCategory")}
        >
          NUEVA CATEGORÍA
        </button>
      </div>
      <table className={style.products}>
        <tr className={style.tr}>
          <th className={style.th}>ID</th>
          <th className={style.th}>Nombre</th>
          <th className={style.th}>Autor</th>
          <th className={style.th}>Descripcion</th>
          <th className={style.th}>Precio</th>
          <th className={style.th}>Stock</th>
          <th className={style.th}>Editar</th>
        </tr>
        {productos.count &&
          productos.rows.map((product) => (
            <tr className={style.tr}>
              <td className={style.td}>{product.id}</td>
              <td className={style.td}>{product.title}</td>
              <td className={style.td}>{product.author}</td>
              <td className={style.td}>{product.description}</td>
              <td className={style.td}>{product.price}</td>
              <td className={style.td}>{product.stock}</td>
              <td className={style.td}>
                <ion-icon
                  name="create-outline"
                  className={style.ionicon}
                  onClick={() => {
                    setProducto(product);
                    push("/admin/crud");
                  }}
                ></ion-icon>
              </td>
            </tr>
          ))}
      </table>
      <button
        className={style.Btn}
        disabled={page === 1 || page === "1"}
        onClick={() => setPage(page - 1)}
      >
        Back
      </button>
      <button
        className={style.Btn}
        disabled={parseInt(page) === pageLimit}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
