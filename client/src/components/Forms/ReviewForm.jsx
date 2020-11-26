import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
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
      .post(
        `${process.env.REACT_APP_API}/reviews/products/${productId}/review`,
        input
      )
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
    <div>
      <h1>Qué te pareció el libro?</h1>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />
      <input
        type="text"
        value={input.title}
        name="title"
        onChange={handleChange}
        placeholder="Título de tu reseña"
      />
      <input
        type="text"
        value={input.body}
        name="body"
        onChange={handleChange}
        placeholder="Contanos"
      />
      <button onClick={handleSubmit}>Listo</button>
    </div>
  );
}
