import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import style from "../../CSS/Categoria.module.scss";

export default ({ setCategorias, categorias }) => {
  useEffect(() => {
    axios.get("http://localhost:3000/category").then((data) => {
      setCategorias(data);
    });
  }, []);
  //HandleClick muestra donde se hizo click, entonces OnClick=HandleClick(category.name)
  /*  const HandleClick = (name) => {
    setCategorias(name);
  }; */
  const { push } = useHistory();
  // onClick={() => push("/products/1")}
  return (
    <div className={style.Categorias}>
      <h1 className={style.Title}>CATEGORIAS</h1>
      <ul className={style.Lista}>
        {categorias.map((category) => {
          return (
            <li className={style.Name} OnClick={setCategorias(category.name)}>{category.name}</li>
          );
        })}
      </ul>
    </div>
  );
};
//OnClick = setCategorias(category.name)