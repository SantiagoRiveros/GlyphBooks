import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import style from "../CSS/login.module.scss";

export default function ResetPassword() {
  const [input, setInput] = useState({ password: "", password2: "" });
  const [error, setError] = useState("");
  const { user } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (input.password !== input.password2) {
      setError("Las contraseñas no coinciden");
    } else {
      setError(null);
    }
  }, [input, setError]);

  const handleSubmit = async (e) => {
    const handlePass = await axios.post(
      `http://localhost:3000/users/${user.id}/passwordReset`,
      {
        password: input.password,
        password2: input.password2,
      }
    );
  };

  return (
    <div className={style.fondo}>
      <div className={style.loginbox}>
        <h1>Cambiar contraseña</h1>
        <div className={style.textbox}>
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            onChange={handleChange}
          />
        </div>
        <div className={style.textbox}>
          <input
            onChange={handleChange}
            name="password2"
            type="password"
            placeholder="Repite contraseña"
          />
        </div>
        {!error && input.password ? (
          <input
            type="submit"
            onClick={handleSubmit}
            className={style.btn}
            value="Cambiar"
          />
        ) : (
          <p>{error}</p>
        )}
      </div>
    </div>
  );
}
