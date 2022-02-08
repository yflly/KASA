import React, { Component } from "react";
import Card from "../../components/Card/Card";
import BannerHomePage from "../../components/BannerHomePage/BannerHomePage";
import { data } from "../../datas/data";

class HomePage extends Component {
  render() {
    return (
      <div>
        <BannerHomePage />
        <section className="apartmentCard">
          {data.map((apartment) => {
            return (
              <Card
                key={apartment.id}
                id={apartment.id}
                cover={apartment.cover}
                title={apartment.title}
              />
            );
          })}
        </section>
      </div>
    );
  }
}

export default HomePage;
