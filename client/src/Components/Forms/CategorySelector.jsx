import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

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
  const { push } = useHistory();
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
        <div>
          {selected.length && selected.map((cat) => <h5>{cat.name}</h5>)}
        </div>
        <div>
          <button onSubmit={() => handleSubmit}>Agrega Categoria</button>
          <button OnClick={() => push("/Catalogue")}>Terminado</button>
        </div>
      </form>
    </div>
  );
}
