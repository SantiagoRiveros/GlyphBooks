import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import style from "../../CSS/Categoria.module.scss";

export default function SideBar({ setCategory }) {
  const [categorias, setCategorias] = useState([]);

  const { push } = useHistory();

  useEffect(() => {
    axios.get("http://localhost:3000/category").then(({ data }) => {
      setCategorias(data);
    });
  }, []);

  console.log("hola Diego", categorias);

  return (
    <div className={style.Categorias}>
      <h1 className={style.Title}>CATEGORIAS</h1>
      <ul className={style.Lista}>
        {categorias.length &&
          categorias.map((category) => (
            <li
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
