import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "../CSS/navbar.module.css";

export default function NavBar(props) {
  const user = useSelector((state) => state.user);
  const test = () => {
    console.log(user);
  };
  return (
    <nav>
      <img
        className={style.imgLogo}
        src="https://media.discordapp.net/attachments/772911955349340171/773903872740556820/Logo_horizontal.png?width=1443&height=338"
        alt="Logo"
      />
      <ul className={style.links}>
        <li>
          <Link className={style.active} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/catalogo">Catalogo</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/ingresar">Ingresar</Link>
        </li>
        <li>
          <ion-icon onClick={props.onCartClick} name="cart-outline"></ion-icon>
        </li>
      </ul>
    </nav>
  );
}
