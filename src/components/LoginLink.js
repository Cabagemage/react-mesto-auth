import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';

function LoginLink(props) {
  return (
    <button className="header__button">
  {props.login ? <Link className="header__button" onClick={props.onClick} to="/sign-in">Войти</Link>
  : <Link className="header__button" onClick={props.onClick} to="/registration">Регистрация</Link>}
  </button>
  );
}

export default LoginLink;
