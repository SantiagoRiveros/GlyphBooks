import React, { useState } from "react";
import axios from "axios";
import style from "../CSS/login.module.scss";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, agregarAlCarrito } from "../actions/actions";

export default function Login() {
  const { push } = useHistory();
  const dispatch = useDispatch();
  const [input, setInput] = useState({ email: "", contraseña: "" });

  const { items } = useSelector((state) => state.cart);

  const handleSubmit = (e) => {
    axios
      .get(
        `http://localhost:3000/users/login?email=${input.email}&contraseña=${input.contraseña}`
      )
      .then(({ data }) => {
        data.id && dispatch(login(data));
        return axios.get(`http://localhost:3000/users/${data.id}/cart`);
      })
      .then(({ data }) => {
        if (data[0]) {
          console.log(data[0]);
          let products = [];
          data[0].products.forEach((p) => {
            if (!items.find((el) => el.id === p.id)) {
              products.push(p);
            }
          });
          dispatch(agregarAlCarrito(products));
        }
      })
      .catch((error) => {
        console.log(error);
        alert("usuario y/o contraseña incorrecta");
      });
  };
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={style.fondo}>
      <div className={style.loginbox}>
        <h1>Ingresar</h1>
        <div className={style.textbox}>
          <input
            name="email"
            onChange={handleChange}
            value={input.email}
            type="text"
            placeholder="Email"
          />
        </div>
        <div className={style.textbox}>
          <input
            name="contraseña"
            onChange={handleChange}
            value={input.contraseña}
            type="password"
            placeholder="Contraseña"
          />
        </div>
        <input
          onClick={handleSubmit}
          type="button"
          className={style.btn}
          value="Ingresar"
        />
        <button onClick={() => push("/signup")} className={style.btn}>
          Crear cuenta
        </button>
      </div>
    </div>
  );
}
