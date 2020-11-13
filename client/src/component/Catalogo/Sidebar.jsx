import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "../../CSS/Categoria.module.scss";

export default function SideBar({ setCategory }) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/category").then(({ data }) => {
      setCategorias(data);
    });
  }, []);

  return (
    <div className={style.Categorias}>
      <h1 className={style.Title}>CATEGORIAS</h1>
      <ul className={style.Lista}>
        <li
          className={style.category}
          onClick={() => {
            setCategory(null);
          }}
        >
          Todo
        </li>
        {categorias.length &&
          categorias.map((category) => (
            <li
              key={category.id}
              className={style.category}
              onClick={() => {
                setCategory(category.id);
              }}
            >
              {category.name}
            </li>
          ))}
      </ul>
    </div>
  );
}
 
