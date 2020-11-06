import React, { useEffect, useState } from "react";

export default function CategorySelector(props) {
  const [categorias, setCategorias] = useState([]);
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/category").then(({ data }) => {
      setCategorias(data);
    });
  }, []);
  const handleSubmit = (e) => {
    setSelected((old) => {
      [...old, e.target.value];
    });
  };
  return (
    <div>
      <h1>Agrega categorias a tu producto!</h1>
      <form>
        <select>
          {categorias.length &&
            categorias.map((category) => (
              <option value={category}>{category.name}</option>
            ))}
        </select>
        <button onSubmit={() => handleSubmit}>Agrega Categoria</button>
      </form>
    </div>
  );
}
