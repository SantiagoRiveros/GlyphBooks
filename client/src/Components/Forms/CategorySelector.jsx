import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AddCategory({ producto, setProducto }) {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/category").then(({ data }) => {
      setCategorias(data);
    });

    return setProducto(null);
  }, []);
  const handleSubmit = (e) => {
    axios.post(
      `http://localhost:3000/products/${producto.id}/category/${e.target.value}`
    );
  };

  const handleClick = () => {};
  return (
    <div>
      <h1>Agrega categorias a tu producto!</h1>
      <form>
        <select>
          {categorias.length &&
            categorias.map((category) => (
              <option value={category.id}>{category.name}</option>
            ))}
        </select>
        <button onSubmit={handleSubmit}>seleccionar</button>
      </form>
      <button onClick={handleClick}>agregar</button>
    </div>
  );
}
