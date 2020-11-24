import React, { useEffect, useState } from "react"
import style from "../../CSS/review.module.scss";
import { connect } from "react-redux";
import axios from "axios";

function Review(props) {
    const [reviews, setReviews] = useState();

    useEffect(() => {
        axios
        .get(`http://localhost:3000/reviews/${props.id}`)
          .then(({ data }) => {
            setReviews(data);
          });
      }, [props.id]);
      
    if (reviews) {
    return (
    <div className={style.container}>
      {reviews.map(review => (
        <div>
          <h1  className={style.title}>{review.title}</h1>
          <h4 className={style.date}>{review.createdAt}</h4>
          <h3 className={style.user}>{review.userId}</h3>
          <div>{review.rating}</div>
          <h3 className={style.description}>{review.body}</h3>
        </div>))}
    </div>
    );
  } else {
    return <div>No hay reseñas disponibles para este producto</div>;
  }
}

export default connect()(Review);