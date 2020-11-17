import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "../../CSS/Admin/adminProduct.module.scss";
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
          <th className={style.th}>Nombre</th>
          <th className={style.th}>Descripcion</th>
          <th className={style.th}>Precio</th>
          <th className={style.th}>Stock</th>
          <th className={style.th}>Editar</th>
        </tr>
        {productos.length &&
          productos.map((product) => (
            <tr className={style.tr}>
              <td className={style.td}>{product.title}</td>
              <td className={style.td}>{product.description}</td>
              <td className={style.td}>{product.price}</td>
              <td className={style.td}>{product.stock}</td>
              <td className={style.td}>
               <ion-icon name="create-outline"  className={style.ionicon} onClick={() => {setProducto(product); push("/admin/crud");}}></ion-icon>
              </td>
            </tr>
          ))}
      </table>
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
    </div>
  );
}
