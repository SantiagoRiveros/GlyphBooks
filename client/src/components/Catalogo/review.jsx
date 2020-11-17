import React, { useEffect, useState } from "react"
import style from "../../CSS/review.module.scss";
import axios from "axios";

export default function Review(props) {
    const [review, setReview] = useState();

    useEffect(() => {
        axios
          .get(`http://localhost:3000/reviews/search/${props.id}`)
          .then(({ data }) => {
            setReview(data.book);
          });
      }, [props.id]);

    if (review) {
    return (
    <div className={style.container}>
        <h1  className={style.title}>{review.title}</h1>
        <h4 className={style.date}>{review.createdAt}</h4>
        <h1 className={style.user}>{review.userId}</h1>
        <div>{review.rating}5</div>
        <h3 className={style.description}>{review.body}</h3>
    </div>
    );
  } else {
    return <div>No hay reseñas disponibles para este producto</div>;
  }
}