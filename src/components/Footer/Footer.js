import React, { Component } from "react";
import logo_footer from "../../assets/logo_footer.png";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <img src={logo_footer} alt="Kasa" />

        <p>© 2021 Kasa. Tous droits réservés</p>
      </footer>
    );
  }
}

export default Footer;
