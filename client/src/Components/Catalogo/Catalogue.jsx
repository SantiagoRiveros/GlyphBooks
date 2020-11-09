import React, { useEffect, useState } from "react";
import Producto from "./productCard.jsx";
import Sidebar from "./Sidebar.jsx";
import { useHistory } from "react-router-dom";
import axios from "axios";
import style from "../../CSS/catalogue.module.scss";

export default function Catalogue({ setProducto }) {
  const { push } = useHistory();
  const [productos, setProductos] = useState([]);
  const [category, setCategory] = useState("");
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then(({ data }) => {
        setProductos(data);
        setDisplay(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (category) {
      setDisplay(
        productos.filter((p) => {
          return p.Categories && p.Categories.find((c) => c.id === category);
        })
      );
    } else setDisplay(productos);
  }, [category, productos]);

  return (
    <div className={style.Fondo}>
      <Sidebar className={style.Sidebar} setCategory={setCategory} />
      <div className={style.Relleno}>
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
      <div className={style.Catalogue}>
        {display.length &&
          display.map((producto) => {
            return (
              <Producto
                img={producto.img}
                title={producto.title}
                price={producto.price}
                key={producto.id}
                id={producto.id}
                OnClick={() => push(`/productos/${producto.id}`)}
                edit={() => setProducto(producto)}
                categories={producto.Categories}
              />
            );
          })}
      </div>
      </div>
    </div>
  );
}
