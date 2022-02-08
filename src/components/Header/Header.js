import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo_header.png";

class Nav extends Component {
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
          <Link to="/About" className="linkAboutPage">
            A propos
          </Link>
        </nav>
      </header>
    );
  }
}

export default Nav;
