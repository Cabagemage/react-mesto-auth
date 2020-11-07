import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';

function SwitchButton(props) {
  return (
    <button className="header__button">
  {props.login ? <Link className="header__button" onClick={props.onClick} to="/sign-up">Регистрация</Link>
  : <Link className="header__button" onClick={props.onClick} to="/sign-in">Войти</Link>}
  </button>
  );
}

export default SwitchButton;
