import React, { useEffect, useState } from "react";
import Producto from "./productCard.jsx";
import Sidebar from "./Sidebar.jsx";
import Searchbar from "./searchBar";
import { useHistory } from "react-router-dom";
import axios from "axios";
import style from "../../CSS/catalogue.module.scss";

export default function Catalogue() {
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

  const onSearch = (search) => {
    axios
      .get(`http://localhost:3000/products/search?value=${search}`)
      .then(({ data }) => {
        setDisplay(data);
      });
  };

  return (
    <div className={style.Fondo}>
      <Sidebar className={style.Sidebar} setCategory={setCategory} />
      <div className={style.Size}>
        <div className={style.Relleno}>
          <div className={style.Btns}>
            <Searchbar onSearch={onSearch} />
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
                    categories={producto.Categories}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
