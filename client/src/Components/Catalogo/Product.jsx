import React, { useEffect, useState } from "react";
import style from "../../CSS/Product.module.css";
import axios from "axios";

export default function Product({ id }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/search/${id}`)
      .then(({ data }) => {
        setProduct(data.book);
      });
  }, [id]);

  if (product) {
    return (
      <div className={style.container}>
        <div className={style.details}>
          <div className={style.left}>
            <img
              className={style.imagen}
              src={product.img}
              alt="imagen del producto"
            />
          </div>
          <div className={style.right}>
            <h3 className={style.title}>{product.title}</h3>
            <h3 className={style.price}>${product.price}</h3>
            <p className={style.description}>{product.description}</p>
            <h3 className={style.stock}>{product.stock}</h3>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Buscando</div>;
  }
}
