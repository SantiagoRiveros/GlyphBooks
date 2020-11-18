import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "../../CSS/Admin/adminReviews.module.scss";
import { useHistory } from "react-router-dom";

export default function AdminUsers() {
  const { push } = useHistory();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/reviews").then(({ data }) => {
      setReviews(data);
    });
  }, []);

  async function handleDelete (id, productId) {
    await axios.delete(`http://localhost:3000/reviews/products/${productId}/review/${id}`)
    const { data } = await axios.get("http://localhost:3000/reviews")
    setReviews(data);
  }

  return (
    <div className={style.size}>
      <table className={style.reviews}>
        <tr className={style.tr}>
          <th className={style.th}>ID</th>
          <th className={style.th}>Titulo</th>
          <th className={style.th}>Cuerpo</th>
          <th className={style.th}>Calificacion</th>
          <th className={style.th}>Creada por</th>
          <th className={style.th}>Fecha de creacion</th>
          <th className={style.th}>Eliminar</th>
        </tr>
        {reviews.length &&
          reviews.map((review) => (
            <tr className={style.tr}>
              <td className={style.td}>{review.id}</td>
              <td className={style.td}>{review.title}</td>
              <td className={style.td}>{review.body}</td>
              <td className={style.td}>{review.rating}</td>
              <td className={style.td}>{review.userId}</td>
              <td className={style.td}>{review.createdAt}</td>
              <td className={style.td}>
               <ion-icon name="trash-outline"  className={style.ionicon} onClick={() => handleDelete(review.id, review.productId)}></ion-icon>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}