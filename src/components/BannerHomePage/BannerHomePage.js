import React, { Component } from "react";
import "./BannerHomePage.css";
import HomeBannerImg from "../../assets/HomeBannerImg.png";

class BannerHomePage extends Component {
  render() {
    return (
      <div className="homeBanner">
        <img
          src={HomeBannerImg}
          alt="paysage forêt"
          className="homeBannerImg"
        />
        <div className="homeBannerWrapper"></div>
        <h2 className="homeBannerText">Chez vous, partout et ailleurs</h2>
      </div>
    );
  }
}
export default BannerHomePage;
