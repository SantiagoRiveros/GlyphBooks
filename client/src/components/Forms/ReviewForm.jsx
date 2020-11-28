import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import style from "../../CSS/reviewForm.module.scss";
import axios from "axios";

export default function Review({ productId, userId, notShow, orderId, reviewId }) {
  const [error, setError] = useState("");
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
    if(reviewId) {
      axios
        .put(`${process.env.REACT_APP_API}/reviews/${reviewId}`, input)
        .then((data) => {
          notShow();
        })
    } else {
      axios
        .post(
          `${process.env.REACT_APP_API}/reviews/products/${productId}/review`,
          input
        )
        .then((data) => {
          notShow();
        })
    }
    e.preventDefault();
  };

  const ratingChanged = (newRating) => {
    setInput({
      ...input,
      rating: newRating,
    });
  };

  useEffect(() => {
    if(input.body.length > 255 || input.title.length > 255) setError("puede contener hasta 255 caracteres");
    else if(!input.title || !input.body) setError("este campo es obligatorio");
    else setError(null);
  }, [setError])

  return (
    <div className={style.container}>
      <div className={style.text}>
        <h1>Qué te pareció el libro?</h1>
      </div>
      <ReactStars
        count={5}
        value={1}
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
      <div className={style.error}>{(input.title.length > 255 || !input.title) && <span>{error}</span>}</div>
      <div className={style.textbox}>
        <input
          type="text"
          value={input.body}
          name="body"
          onChange={handleChange}
          placeholder="Contanos"
        />
      </div>
      <div className={style.error}>{(input.body.length > 255 || !input.body) && <span>{error}</span>}</div>

      {(!error && <button className={style.Btn} onClick={handleSubmit}>
        Listo
      </button>) || (error &&
        <button className={style.Btn}>Listo</button>)}

    </div>
  );
}
