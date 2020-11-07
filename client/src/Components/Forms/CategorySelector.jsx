import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function AddCategory({ producto, setProducto }) {
  const [categorias, setCategorias] = useState([]);
  const [selected, setSelected] = useState(1);

  const { push } = useHistory();

  useEffect(() => {
    axios.get("http://localhost:3000/category").then(({ data }) => {
      setCategorias(data);
      if (!data) {
        push("/catalogo");
      } else {
        setSelected(data[0]);
      }
    });

    return () => setProducto(null);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3000/products/category/${producto.id}`, selected)
      .then(() => {
        alert("category added");
      });
  };

  const handleChange = (e) => {
    setSelected(e.target.value);
  };
  return (
    <div>
      <h1>Agrega categorias a tu producto!</h1>
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange}>
          {categorias.length &&
            categorias.map((category) => (
              <option key={category.id} value={category}>
                {category.name}
              </option>
            ))}
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
