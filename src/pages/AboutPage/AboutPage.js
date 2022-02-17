import React, { Component } from "react";
import { aboutData } from "../../datas/aboutData";
import BannerAboutPage from "../../components/BannerAboutPage/BannerAboutPage";
import Collaps from "../../components/Collaps/Collaps";
import "./AboutPage.css";

class AboutPage extends Component {
  render() {
    return (
      <div className="about">
        <BannerAboutPage />
        <div className="aboutCollaps">
          {aboutData.map((data) => (
            <Collaps key={data.id} title={data.title} content={data.content} />
          ))}
        </div>
      </div>
    );
  }
}

export default AboutPage;
