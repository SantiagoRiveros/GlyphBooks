import Axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import style from "../../CSS/newcategory.module.css";

export default function NewForm() {
  const [input, setInput] = useState({
    name: "",
    description: "",
  });

  const { push } = useHistory();

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

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
        <label>
          Name:
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={handleChange}
          />
        </label>
        <label>
          description:
          <input
            type="text"
            value={input.description}
            name="description"
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
