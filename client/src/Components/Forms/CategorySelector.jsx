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
        setSelected(data[0].id);
      }
    });

    return () => setProducto(null);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3000/products/category/${producto.id}/${selected}`)
      .then(() => {
        alert("category added");
        setCategorias((oldCategories) =>
          oldCategories.filter((c) => {
            return c.id != selected;
          })
        );
        setSelected(categorias[0].id);
      });
  };

  const handleChange = (e) => {
    console.log(e.target);
    setSelected(e.target.value);
  };
  return (
    <div>
      <h1>Agrega categorias a tu producto!</h1>
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange}>
          {categorias.length &&
            categorias.map(
              (category) => (
                console.log(category),
                (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                )
              )
            )}
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
