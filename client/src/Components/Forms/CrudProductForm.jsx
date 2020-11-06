import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function CrudProducts({ product }) {
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
      axios.post("http://localhost:3000/products", input).then(() => {
        alert("Product was submitted");
        push("/catalogo");
      });

      e.preventDefault();
    } else {
      axios
        .put(`http://localhost:3000/products/${product.id}`, input)
        .then(() => {
          alert("Product was changed");
          push("/catalogo");
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
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={input.title}
          name="title"
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={input.description}
          name="description"
          onChange={handleChange}
        />
      </label>
      <label>
        Author:
        <input
          type="text"
          value={input.author}
          name="author"
          onChange={handleChange}
        />
      </label>
      <label>
        Price:
        <input
          type="num"
          value={input.price}
          name="price"
          onChange={handleChange}
        />
      </label>
      <label>
        Stock:
        <input
          type="num"
          value={input.stock}
          name="stock"
          onChange={handleChange}
        />
      </label>
      <label>
        Img:
        <input
          type="text"
          value={input.img}
          name="img"
          onChange={handleChange}
        />
      </label>
      <newForm />
      <input type="submit" value="Submit" />
      <button onClick={handleDelete}>delete</button>
    </form>
  );
}
