import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo_header.png";

class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <img src={logo} alt="kasa" className="logo" />
        </Link>
        <nav className="navbarHeader">
          <Link to="/" className="linkHomePage">
            Accueil
          </Link>
          <Link to="/about" className="linkAboutPage">
            A propos
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
