import React from "react";
import "../App.css";

function Login() {
  return (
    <div className="login">
      <h1 className="login__title">Регистрация</h1>
      <form className="login__form">
        <input className="login__email" placeholder="email"></input>
        <input className="login__password" placeholder="пароль"></input>
        <button className="login__button">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default Login;
