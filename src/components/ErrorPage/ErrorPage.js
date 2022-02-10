import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

class ErrorPage extends Component {
  render() {
    return (
      <div className="errorPage">
        <h1 className="errorCode">404</h1>
        <h2 className="errorTxt">
          Oups ! La page que vous demandez n'existe pas.
        </h2>
        <Link className="errorLinkToHome" to="/">
          Retourner sur la page d'accueil
        </Link>
      </div>
    );
  }
}

export default ErrorPage;
