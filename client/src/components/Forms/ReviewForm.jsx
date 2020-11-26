import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import style from "../../CSS/reviewForm.module.scss";
import axios from "axios";

export default function Review({ productId, userId, notShow, orderId }) {
  const [input, setInput] = useState({
    rating: "",
    title: "",
    body: "",
    userId,
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    axios
      .post(`http://localhost:3000/reviews/products/${productId}/review`, input)
      .then(() => {
        notShow();
      });
    e.preventDefault();
  };

  const ratingChanged = (newRating) => {
    setInput({
      ...input,
      rating: newRating,
    });
  };

  return (
    <div className={style.container}>
      <div className={style.text}>
        <h1>Qué te pareció el libro?</h1>
      </div>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />
      <div className={style.textbox}>
        <input
          type="text"
          value={input.title}
          name="title"
          onChange={handleChange}
          placeholder="Título de tu reseña"
        />
      </div>
      <div className={style.textbox}>
        <input
          type="text"
          value={input.body}
          name="body"
          onChange={handleChange}
          placeholder="Contanos"
        />
      </div>
      <button className={style.Btn} onClick={handleSubmit}>
        Listo
      </button>
    </div>
  );
}
