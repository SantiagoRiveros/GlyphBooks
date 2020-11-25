import React, { useEffect, useState } from "react";
import { useSelector, connect } from "react-redux";
import { agregarAlCarrito, agregarVarios } from "../../actions/actions";
import style from "../../CSS/ProductDetail.module.scss";
import axios from "axios";
import Review from "./review";
import ShoppingBagIcon from "../Icons/ShoppingBagIcon";

function Product(props) {
  const [product, setProduct] = useState(null);
  const { user } = useSelector((state) => state.user);
  const { items } = useSelector((state) => state.cart);

  const agregarCarrito = (producto) => {
    if (user !== "guest") {
      const notNew = items.find((p) => Number(p.id) === Number(producto.id));
      var nextStep;
      if (notNew) {
        if (notNew.stock > notNew.lineOrder.quantity) {
          let { quantity, orderId, id } = notNew.lineOrder;
          let newQuantity = quantity + 1;
          nextStep = axios.put(
            `http://localhost:3000/order/${orderId}/lineorder`,
            {
              id,
              quantity: newQuantity,
            }
          );
        } else {
          return;
        }
      } else {
        nextStep = axios.post(`http://localhost:3000/users/${user.id}/cart`, {
          id: producto.id,
          price: producto.price,
        });
      }
      nextStep
        .then(() => {
          return axios.get(`http://localhost:3000/users/${user.id}/cart`);
        })
        .then(({ data }) => {
          if (data.length) {
            let libro = data[0].products.find((p) => p.id === producto.id);
            props.dispatch(agregarVarios(data[0].products));
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      props.dispatch(agregarAlCarrito(producto));
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/search/${props.id}`)
      .then(({ data }) => {
        setProduct(data.book);
      });
  }, [props.id]);

  if (product) {
    return (
      <div className={style.container}>
        <div className={style.bkg} />
        <div className={style.details}>
          <section>
            <img
              className={style.img}
              src={product.img}
              alt="imagen del producto"
            />
          </section>
          <section>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "2rem",
              }}
            >
              <button onClick={() => agregarCarrito(product)}>
                <ShoppingBagIcon color="var(--color-primary)" size={24} />
                <span>COMPRAR</span>
                <span>{`$ ${product.price}`}</span>
              </button>
              <label style={{ marginLeft: "1.5rem" }}>Stock:</label>
              <span style={{ marginLeft: "0.5rem" }}>{product.stock}</span>
            </div>
            {product?.reviews?.length ? (
              product.reviews.map((review, index) => (
                <Review review={review} key={index} />
              ))
            ) : (
              <div>No hay reseñas disponibles para este producto</div>
            )}
          </section>
        </div>
      </div>
    );
  } else {
    return <div>Buscando</div>;
  }
}

export default connect()(Product);
