import React, {useContext} from "react";
import logo from "../images/logo.svg";
import { Link } from 'react-router-dom';
import "../App.css";
import {Route} from 'react-router-dom';
import {currentUserContext} from '../contexts/currentUserContext'
function Header({onRegister, signOut, email}) {
  
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
    <Link className="header__button"  to="/signup"  onClick={onRegister}>Регистрация</Link>
    </button>
    </Route>
    <Route exact path="/">
      <p>{email}</p>
      <Link className="header__button"   onClick={signOut}>Выйти</Link>
    </Route>
    </header>

  );
}

export default Header;
