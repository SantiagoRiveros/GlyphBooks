import React, { useState } from "react";
import axios from "axios";
import style from "../CSS/login.module.scss";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, agregarVarios } from "../actions/actions";

export default function Login({ setLocalUser }) {
  const { push } = useHistory();
  const dispatch = useDispatch();
  const [input, setInput] = useState({ email: "", password: "" });

  const { items } = useSelector((state) => state.cart);

  const handleSubmit = (e) => {
    var idUser;
    axios
      .post(`http://localhost:3000/auth/login`, input)
      .then(({ data }) => {
        console.log(data);
        setLocalUser(data);
        idUser = data.user.id;
      })
      .then(() => {
        if (items.length) {
          return axios
            .post(`http://localhost:3000/users/${idUser}/cart`, {
              id: items[0].id,
              price: items[0].price,
            })
            .then(() =>
              Promise.all(
                items.map((p) => {
                  return axios.post(
                    `http://localhost:3000/users/${idUser}/cart`,
                    {
                      id: p.id,
                      price: p.price,
                    }
                  );
                })
              )
            );
        }
      })
      .then(() => {
        return axios.get(`http://localhost:3000/users/${idUser}/cart`);
      })
      .then(({ data }) => {
        if (data[0]) {
          dispatch(agregarVarios(data[0].products));
        }
        push("/");
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
            name="password"
            onChange={handleChange}
            value={input.password}
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
