import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
    <div>
      <h1>CATEGORIAS</h1>
      <ul>
        {categorias.map((category) => {
          return (
            <li OnClick={() => push(`/productos/${category.name}`)}>
              {category.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
