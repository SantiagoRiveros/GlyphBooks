import React from "react";
import style from "../../CSS/review.module.scss";
import ReactStars from "react-rating-stars-component";
import { connect } from "react-redux";

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
          <ReactStars
            count={5}
            isHalf={true}
            value={review.rating}
            edit={false}
          />
          <h3 className={style.description}>{review.body}</h3>
        </div>))}
    </div>
  );
}

export default connect()(Review);
