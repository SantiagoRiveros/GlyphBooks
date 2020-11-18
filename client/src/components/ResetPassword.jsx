import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import style from "../CSS/login.module.scss";

export default function ResetPassword() {
  const [input, setInput] = useState({ oldpass: "", newpass: "" });
  const { user } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    const handlePass = await axios.post(
      `http://localhost:3000/users/${user.user.id}/passwordReset`,
      {
        password: input.oldpass,
        newPassword: input.newpass,
      }
    );
  };

  return (
    <div className={style.fondo}>
      <div className={style.loginbox}>
        <h1>Cambiar contraseña</h1>
        <div className={style.textbox}>
          <input
            name="oldpass"
            type="password"
            placeholder="Contraseña actual"
            onChange={handleChange}
          />
        </div>
        <div className={style.textbox}>
          <input
            onChange={handleChange}
            name="newpass"
            type="password"
            placeholder="Nueva contraseña"
          />
        </div>
        <input
          type="submit"
          onClick={handleSubmit}
          className={style.btn}
          value="Cambiar"
        />
      </div>
    </div>
  );
}
