// reviewcrud
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import style from "../../CSS/crudform.module.scss";

export default function CrudReviews({ review, setReview }) {
    const [input, setInput] = useState({
      id: "",
    });
    
    const [error, setError] = useState("este campo es obligatorio");

    const { push } = useHistory();

    useEffect(() => {
        if (review) {
          setInput(review);
        }
    }, [review]);

    useEffect(() => {
        if (!input.id) {
            setError("este campo es obligatorio");
        } else {
          setError(null);
        }
    }, [input, setError]);

    const handleChange = (e) => {
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
      };

    const handleDelete = () => {
        if (review) {
          axios.delete(`http://localhost:3000/reviews/search/${review.id}`).then(() => {
            setReview(null);
            push("/admin/reviews");
          });
        } else {
          push("/admin/reviews");
        }
    };
      console.log(input.id);
     

    return (
        <div className={style.fondo}>
          <form className={style.form}>
            <h1>ELIMINAR REVIEW</h1>
            <div className={style.textbox}>
              <input
                placeholder="ID"
                type="integer"
                value={input.id}
                name="id"
                onChange={handleChange}
              />
            </div>
            <div className={style.error}>
              {!input.id && <span>{error}</span>}
            </div>
            
            <div className={style.btnDiv}>
              <button className={style.btn} onClick={handleDelete}>
                ELIMINAR
              </button>
            </div>
          </form>
        </div>
      );
    }