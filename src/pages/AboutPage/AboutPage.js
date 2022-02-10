import React, { Component } from "react";
import { aboutData } from "../../datas/aboutData";
import BannerHomePage from "../../components/BannerHomePage/BannerHomePage";
import Collaps from "../../components/Collaps/Collaps";
import "./AboutPage.css";

class AboutPage extends Component {
  render() {
    return (
      <div className="about">
        <BannerHomePage />
        {aboutData.map((data) => (
          <Collaps key={data.id} title={data.title} content={data.content} />
        ))}
      </div>
    );
  }
}

export default AboutPage;
