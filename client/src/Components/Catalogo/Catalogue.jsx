import React, { useEffect, useState } from "react";
import Producto from "./productCard.jsx";
import Sidebar from "./Sidebar.jsx";
import { useHistory } from "react-router-dom";
import axios from "axios";
import style from "../../CSS/catalogue.module.css";

export default function Catalogue({ setProducto }) {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((data) => {
        console.log(data);
        setProductos(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const { push } = useHistory();
  return (
    <div>
      <Sidebar className={style.Sidebar} categorias={categorias} setCategorias={setCategorias} />
      <div className={style.Catalogue}>
        {productos.length &&
          productos.map((producto) => {
            return (
              <Producto
                img={producto.img}
                title={producto.title}
                price={producto.price}
                id={producto.id}
                OnClick={() => push(`/productos/${producto.id}`)}
                edit={() => setProducto(producto)}
              />
            );
          })}
        </div>
    </div>
  );
}
