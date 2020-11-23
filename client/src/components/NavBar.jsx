import React from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import style from "../CSS/navbar.module.scss";
import SearchBar from "./Catalogo/searchBar";

export default function NavBar(props) {
  // const { user } = useSelector((state) => state.user);
  /* const test = () => {
    console.log(user);
  }; */
  return (
    <nav>
      <img
        className={style.imgLogo}
        src="https://media.discordapp.net/attachments/772911955349340171/773903872740556820/Logo_horizontal.png?width=1443&height=338"
        alt="Logo"
      />
      <ul className={style.links}>
        <li>
          <SearchBar />
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
