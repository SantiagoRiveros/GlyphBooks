import React, { useEffect, useState } from "react";
import { useSelector, connect } from "react-redux";
import { agregarAlCarrito } from "../../actions/actions";
import style from "../../CSS/Product.module.css";
import axios from "axios";
import Review from "./review";

function Product(props) {
  const [product, setProduct] = useState(null);
  const { user } = useSelector((state) => state.user);
  const { items } = useSelector((state) => state.cart);

  const agregarCarrito = (producto) => {
    if (user !== "guest") {
      const notNew = items.find((p) => p.id === producto.id);
      if (notNew) {
        let { quantity, orderId, id } = notNew.lineOrder;
        let newQuantity = quantity + 1;
        console.log(id, newQuantity, orderId);
        axios.put(`http://localhost:3000/order/${orderId}/lineorder`, {
          id,
          quantity: newQuantity,
        });
      }
      axios
        .post(`http://localhost:3000/users/${user.id}/cart`, {
          id: producto.id,
          price: producto.price,
        })
        .then(() => {
          return axios.get(`http://localhost:3000/users/${user.id}/cart`);
        })
        .then(({ data }) => {
          if (data.length) {
            let libro = data[0].products.find((p) => p.id === producto.id);
            props.dispatch(agregarAlCarrito(libro));
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
            <button onClick={() => agregarCarrito(product)}>COMPRAR</button>
            <Review id={product.id} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Buscando</div>;
  }
}

export default connect()(Product);
