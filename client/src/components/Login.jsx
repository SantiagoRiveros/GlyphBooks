import React, { useState } from "react";
import axios from "axios";
import style from "../CSS/login.module.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../actions/actions";

export default function Login() {
  const { push } = useHistory();
  const dispatch = useDispatch();
  const [input, setInput] = useState({ email: "", contraseña: "" });

  const handleSubmit = (e) => {
    axios
      .get(
        `http://localhost:3000/users/login?email=${input.email}&contraseña=${input.contraseña}`
      )

      .then(({ data }) => {
        dispatch(login(data));
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
