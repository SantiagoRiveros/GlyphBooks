import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import style from "../../CSS/crudform.module.scss";

export default function CrudProducts({ product, setProduct }) {
  const [input, setInput] = useState({
    title: "",
    description: "",
    author: "",
    price: 1,
    stock: 1,
    img: null,
  });

  const { push } = useHistory();

  useEffect(() => {
    if (product) {
      setInput(product);
    }
  }, [product]);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (!product) {
      axios.post("http://localhost:3000/products", input).then(({ data }) => {
        setProduct(data);
        push("/addCategory");
      });

      e.preventDefault();
    } else {
      axios
        .put(`http://localhost:3000/products/${product.id}`, input)
        .then(() => {
          push("/addCategory");
        });

      e.preventDefault();
    }
  };

  const handleDelete = () => {
    if (product) {
      axios.delete(`http://localhost:3000/products/${product.id}`).then(() => {
        setProduct(null);
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
        <label className={style.label}>TÍTULO:</label>
        <input
          className={style.input}
          type="text"
          value={input.title}
          name="title"
          onChange={handleChange}
        />
        <label className={style.label}>DESCRIPCIÓN:</label>
        <textarea
          rows={5}
          className={style.input}
          value={input.description}
          name="description"
          onChange={handleChange}
        />
        <label className={style.label}>AUTOR:</label>
        <input
          className={style.input}
          type="text"
          value={input.author}
          name="author"
          onChange={handleChange}
        />
        <label className={style.label}>PRECIO:</label>
        <input
          className={style.input}
          type="number"
          value={input.price}
          name="price"
          onChange={handleChange}
        />
        <label className={style.label}>STOCK:</label>
        <input
          className={style.input}
          type="number"
          value={input.stock}
          name="stock"
          onChange={handleChange}
        />
        <label className={style.label}>Img URL:</label>
        <input
          className={style.input}
          type="text"
          value={input.img}
          name="img"
          onChange={handleChange}
        />
        <div className={style.divBTN}>
          <input className={style.crudBTN} type="submit" value="AGREGAR" />
          <button className={style.crudBTN} onClick={handleDelete}>
            ELIMINAR
          </button>
        </div>
      </form>
    </div>
  );
}
