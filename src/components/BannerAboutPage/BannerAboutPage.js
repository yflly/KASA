import React, { Component } from "react";
import AboutBannerImg from "../../assets/AboutBannerImg.png";
import "./BannerAboutPage.css";

class BannerAboutPage extends Component {
  render() {
    return (
      <section className="aboutBanner">
        <img
          src={AboutBannerImg}
          alt="paysage montagne"
          className="aboutBannerImg"
        ></img>
        <div className="aboutBannerWrapper"></div>
      </section>
    );
  }
}

export default BannerAboutPage;
