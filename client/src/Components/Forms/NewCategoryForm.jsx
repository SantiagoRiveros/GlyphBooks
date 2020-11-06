import React, { useState } from "react";
import style from "../../CSS/newcategory.module.css";

export default function NewForm() {
  const [input, setInput] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    alert("Category was submitted: " + e.target.value);
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
