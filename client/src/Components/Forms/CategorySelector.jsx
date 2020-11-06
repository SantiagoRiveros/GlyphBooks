import React, { useEffect, useState } from "react";

export default function CategorySelector(props) {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/category").then(({ data }) => {
      setCategorias(data);
    });
  }, []);
  return (
    <div>
      <h1>Agrega categorias a tu producto!</h1>
      <form>
        <select>
          {categorias.length &&
            categorias.map((category) => (
              <option value={category.name}>{category.name}</option>
            ))}
        </select>
      </form>
    </div>
  );
}
