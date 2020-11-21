import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "../CSS/navbar.module.scss";
import icon from '../template/Images/logo.svg'

export default function NavBar(props) {
  const { user } = useSelector((state) => state.user);
  /* const test = () => {
    console.log(user);
  }; */
  return (
    <nav>
      <img
        className={style.imgLogo}
        src={icon}
        alt="Logo"
      />
      <ul className={style.links}>
        <li>
          <button onClick={props.logOut}>logOut</button>
        </li>
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
          {!props.localUser ? (
            <Link to="/ingresar">Ingresar</Link>
          ) : (
            <Link to="/cuenta">Cuenta</Link>
          )}
        </li>
        <li>
          <ion-icon onClick={props.onCartClick} name="cart-outline"></ion-icon>
        </li>
        {/*  <li>
          <Link to="/forgot">
            <ion-icon name="person-circle-outline"></ion-icon>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}
