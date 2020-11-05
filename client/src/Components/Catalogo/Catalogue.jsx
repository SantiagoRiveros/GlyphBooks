import React, { useEffect, useState } from "react";
import Producto from "./productCard.jsx";
import Sidebar from "./Sidebar.jsx";
import axios from "axios";

export default function Catalogue() {
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
  return (
    <div>
      <Sidebar categorias={categorias} setCategorias={setCategorias} />
      {productos.length &&
        productos.map((producto) => {
          return (
            <Producto
              img={producto.img}
              title={producto.title}
              price={producto.price}
            />
          );
        })}
    </div>
  );
}
//hola
