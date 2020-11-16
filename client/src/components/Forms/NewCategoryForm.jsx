import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import style from "../../CSS/newcategory.module.scss";

export default function NewForm() {
  const [input, setInput] = useState({
    name: "",
    description: "",
  });

  const [error, setError] = useState("este campo es obligatorio");

  const { push } = useHistory();

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  /* useEffect(() => {
    if (category) {
      setInput(category);
    }
  }, [category]); */

  useEffect(() => {
    if (!input.name || !input.description) {
      setError("Este campo es obligatorio");
    } else {
      setError(null);
    }
  }, [input, setError]);

  const handleSubmit = (e) => {
    Axios.post("http://localhost:3000/category", input).then(() => {
      alert("category was submitted");
      push("/catalogo");
    });

    e.preventDefault();
  };

  return (
    <div className={style.fondo}>
      <form onSubmit={handleSubmit} className={style.form}>
       <h1>CREAR CATEGORIA</h1>
        <div className={style.textbox}>
        <input
          placeholder="Nombre"
          type="text"
          value={input.name}
          name="name"
          onChange={handleChange}
        />
        </div>
        <div className={style.textbox}>
        <input
          placeholder="Descripcion"
          type="text"
          value={input.description}
          name="description"
          onChange={handleChange}
        />
        </div>
        <input className={style.btn} type="submit" value="Submit" />
      </form>
    </div>
  );
}
