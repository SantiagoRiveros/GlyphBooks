import React from "react";
import style from "../CSS/login.module.css";

export default function Login() {
  return (
    <div className={style.fondo}>
      <div className={style.loginbox}>
        <h1>Login</h1>
        <div className={style.textbox}>
          <input type="text" placeholder="Username" />
        </div>
        <div className={style.textbox}>
          <input type="password" placeholder="Password" />
        </div>
        <input type="button" className={style.btn} value="Sign In" />
      </div>
    </div>
  );
}
