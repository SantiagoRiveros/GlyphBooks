import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import style from "../CSS/login.module.scss";

export default function Forgot() {
  const [input, setInput] = useState({ email: "" });
  const { user } = useSelector((state) => state.user);
  const { push } = useHistory();

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    const response = await axios.post(`http://localhost:3000/users/forgot`, {
      email: input.email,
    });
    if (response.status == 404) {
    } else {
      console.log(response.data);
      push("/password?id=" + response.data.id);
    }
  };

  return (
    <div className={style.fondo}>
      <div className={style.loginbox}>
        <h1>Olvidaste tu contraseña</h1>
        <div className={style.textbox}>
          <input
            name="email"
            type="email"
            placeholder="Ingresa tu Email"
            onChange={handleChange}
          />
        </div>
        <input
          type="submit"
          onClick={handleSubmit}
          className={style.btn}
          value="Enviar"
        />
      </div>
    </div>
  );
}
