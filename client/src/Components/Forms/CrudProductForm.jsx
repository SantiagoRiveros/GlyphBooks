import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import style from "../../CSS/crudform.module.css";

export default function CrudProducts({ product, setProduct }) {
  const [input, setInput] = useState({
    title: "",
    description: "",
    author: "",
    price: 0,
    stock: 0,
    img: "",
  });

  const { push } = useHistory();

  useEffect(() => {
    if (product) {
      setInput(product);
    }
  }, []);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (!product) {
      axios.post("http://localhost:3000/products", input).then(({ data }) => {
        alert("Product was submitted");
        setProduct(data);
        push("/addCategory");
      });

      e.preventDefault();
    } else {
      axios
        .put(`http://localhost:3000/products/${product.id}`, input)
        .then(() => {
          alert("Product was changed");
          push("/addCategory");
        });

      e.preventDefault();
    }
  };

  const handleDelete = () => {
    if (product) {
      axios.delete(`http://localhost:3000/products/${product.id}`).then(() => {
        alert("Product was deleted");
        push("/catalogo");
      });
    } else {
      push("/catalogo");
    }
  };

  return (
    <div className={style.imgLibros}>
      <form onSubmit={handleSubmit} className={style.form}>
        <h3 className={style.title}>CREAR O MODIFICAR PRODUCTO</h3>
        <label className={style.label}>Name:</label>
        <input
          className={style.input}
          type="text"
          value={input.title}
          name="title"
          onChange={handleChange}
        />
        <label className={style.label}>Description:</label>
        <input
          className={style.input}
          type="text"
          value={input.description}
          name="description"
          onChange={handleChange}
        />
        <label className={style.label}>Author:</label>
        <input
          className={style.input}
          type="text"
          value={input.author}
          name="author"
          onChange={handleChange}
        />
        <label className={style.label} placeholder="">
          Price:
        </label>
        <input
          className={style.input}
          type="num"
          value={input.price}
          name="price"
          onChange={handleChange}
        />
        <label className={style.label}>Stock:</label>
        <input
          className={style.input}
          type="num"
          value={input.stock}
          name="stock"
          onChange={handleChange}
        />
        <label className={style.label}>Img:</label>
        <input
          className={style.input}
          type="text"
          value={input.img}
          name="img"
          onChange={handleChange}
        />
        <newForm />
        <input type="submit" value="Submit" />
        <button onClick={handleDelete}>delete</button>
      </form>
    </div>
  );
}
