import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import store from "../../store/index";
import style from "../../CSS/carrito.module.css";
import { addToCart } from "../../actions/actions";
import ItemCarrito from "./ItemCarrito";

export default function Carrito(props) {
  const [cart, setCart] = useState([]);

  const idUser = 1;
  const dispatch = useDispatch();

  const open = props.cartShow ? style.sidebarOpen : style.sidebar;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${idUser}/cart`)
      .then(({ data }) => {
        setCart(data)
      })
  }, []);


  return(
    <div className={style.container}>
      <div className={open}>
        {
          cart.length && cart.map(item => <ItemCarrito title={item.title} price={item.price} />)
        }
      </div>
    </div>
  );
};
