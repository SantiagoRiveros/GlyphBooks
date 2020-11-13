import Axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import style from "../../CSS/newcategory.module.css";

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

  useEffect(() => {
    if(category) {
      setInput(category)
    }
  }, [category]);
  
  useEffect(() => {
    if (!input.name || !input.description) {
      setError("Este campo es obligatorio")
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
    <div className={style.imgLibros}>
      <form onSubmit={handleSubmit} className={style.form}>
        <label className={style.label}>Name:</label>
        <input
          type="text"
          value={input.name}
          name="name"
          onChange={handleChange}
        />
        <label className={style.label}>description:</label>
        <input
          type="text"
          value={input.description}
          name="description"
          onChange={handleChange}
        />
        <input className={style.submitBTN} type="submit" value="Submit" />
      </form>
    </div>
  );
}
