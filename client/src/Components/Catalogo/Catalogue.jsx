import React, { useEffect, useState } from "react";
import Producto from "./productCard.jsx";
import Sidebar from "./Sidebar.jsx";
import { useHistory } from "react-router-dom";
import axios from "axios";
import style from "../../CSS/catalogue.module.css";

export default function Catalogue({ setProducto }) {
  const { push } = useHistory();
  const [productos, setProductos] = useState([]);
  const [category, setCategory] = useState("");
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((data) => {
        setProductos(data.data);
        setDisplay(data.data);
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
  }, [category]);

  return (
    <div>
      <Sidebar className={style.Sidebar} setCategory={setCategory} />
      <div className={style.Catalogue}>
        <div>
          <button name="crud" onClick={() => push("/crud")}>
            add product
          </button>
          <button name="newCategory" onClick={() => push("/newCategory")}>
            add category
          </button>
        </div>
        {display.length &&
          display.map((producto) => {
            return (
              <Producto
                img={producto.img}
                title={producto.title}
                price={producto.price}
                id={producto.id}
                OnClick={() => push(`/productos/${producto.id}`)}
                edit={() => setProducto(producto)}
                categories={producto.Categories}
              />
            );
          })}
      </div>
    </div>
  );
}
