import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "../../CSS/Product.module.css";
import axios from "axios";
import store from "../../store/index";
import { addToCart } from "../../actions/actions.js"

export default function Product({ id }) {
  const [product, setProduct] = useState(null);

  const idUser = 1
  const dispatch = useDispatch();

  const handleClick = () => {
    axios
      .post(`http://localhost:3000/users/${idUser}/cart`, { id: id, price: product.price, quantity: 1 })
      .then(({data}) => {
        dispatch(addToCart(data))
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/search/${id}`)
      .then(({ data }) => {
        setProduct(data.book);
      });
  }, [id]);

  /*useEffect(() => {
    axios
      .post(`http://localhost:3000/users/${id}/cart`)
  })*/

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
            <button onClick={id => addToCart(id)}>COMPRAR</button>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Buscando</div>;
  }
}
