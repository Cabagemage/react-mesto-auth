import React, {useState} from "react";
import logo from "../images/logo.svg";
import { Link } from 'react-router-dom';
import "../App.css";
import LoginLink from "./LoginLink";

function Header(props) {
  const [login, toLogin] = useState(false);


  function toggleLogin() {
    toLogin(!login);
  }

  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="logo" />
      {login ?
          <LoginLink onClick={toggleLogin} login={login} />
          : <LoginLink onClick={toggleLogin} login={login} />
        }
    </header>

  );
}

export default Header;
