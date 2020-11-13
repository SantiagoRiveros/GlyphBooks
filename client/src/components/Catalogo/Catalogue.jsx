import React, { useEffect, useState } from "react";
import Producto from "./productCard.jsx";
import Sidebar from "./Sidebar.jsx";
import { useHistory } from "react-router-dom";
import axios from "axios";
import style from "../../CSS/catalogue.module.scss";
import Pagination from "./pagination.jsx";
import { useLocation } from "react-router";

function useQuery() {
  let search = useLocation().search;
  let result = search.slice(1).split("&");
  result = result.reduce((dataResult, item) => {
    const pair = item.split("=");
    dataResult[pair[0]] = pair[1];
    return dataResult;
  }, {});
  return result;
}

export default function Catalogue({ setProducto }) {
  const { push } = useHistory();
  const [productos, setProductos] = useState([]);
  const [category, setCategory] = useState("");
  const [display, setDisplay] = useState([]);
  const { page } = useQuery();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products?page=${page || 1}`)
      .then(({ data }) => {
        setProductos(data);
        setDisplay(data);
      })
      .catch((err) => console.log(err));
  }, [page]);

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
        <Pagination page={page} quantity={display.length} />
      </div>
    </div>
  );
}
