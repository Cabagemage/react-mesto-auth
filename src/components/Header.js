import React, {useState} from "react";
import logo from "../images/logo.svg";
import { Link } from 'react-router-dom';
import "../App.css";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function Header(props) {
  const [login, toLogin] = useState(false);



  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="logo" />
      <Route path="/signup">
      <button className="header__button">
      <Link className="header__button" to="/signin">Вход</Link>
      </button>
      </Route>
    <Route path="/signin">
    <button className="header__button">
    <Link className="header__button"  to="/signup">Регистрация</Link>
    </button>
    </Route>
    </header>

  );
}

export default Header;
