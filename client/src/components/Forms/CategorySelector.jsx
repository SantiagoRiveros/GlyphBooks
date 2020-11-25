import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import style from "../../CSS/addCategory.module.scss";

export default function AddCategory({ producto, setProducto }) {
  const [categorias, setCategorias] = useState([]);
  const [selected, setSelected] = useState(1);

  const { push } = useHistory();

  useEffect(() => {
    if (!producto) push("/catalogo");
    axios.get("http://localhost:3000/category").then(({ data }) => {
      setCategorias(data);
      setCategorias((oldCategories) =>
        oldCategories.filter((c) => {
          return (
            !producto.Categories ||
            !producto.Categories.find((C) => C.id === c.id)
          );
        })
      );
      if (data.length) {
        setSelected(data[0].id);
      }
    });

    return () => setProducto(null);
  }, [push, producto, setProducto]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3000/products/category/${producto.id}/${selected}`)
      .then(() => {
        setCategorias((oldCategories) =>
          oldCategories.filter((c) => {
            return c.id !== selected;
          })
        );
        setSelected(categorias[0].id);
      });
  };

  const handleChange = (e) => {
    console.log(e.target);
    setSelected(Number(e.target.value));
  };
  return (
    <div className={style.container}>
      <h1>Agrega categorias a tu producto!</h1>
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange}>
          {categorias.length &&
            categorias.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
        </select>
        <input type="submit" value="Agregar" />
        <button onClick={() => push("/admin/products")}>hecho</button>
      </form>
    </div>
  );
}
