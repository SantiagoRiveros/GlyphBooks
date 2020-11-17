import React, { useState } from "react";
import style from "../CSS/login.module.scss";

export default function ResetPassword() {
  const [input, setInput] = useState({ oldpass: "", newpass: "" });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className={style.fondo}>
      <div className={style.loginbox}>
        <h1>Cambiar contraseña</h1>
        <div className={style.textbox}>
          <input
            name="email"
            type="text"
            placeholder="Contraseña actual"
            onChange={handleChange}
          />
        </div>
        <div className={style.textbox}>
          <input
            onChange={handleChange}
            name="contraseña"
            type="password"
            placeholder="Nueva contraseña"
          />
        </div>
        <input type="button" className={style.btn} value="Cambiar" />
      </div>
    </div>
  );
}
