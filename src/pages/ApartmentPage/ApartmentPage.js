import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { data } from "../../datas/data";
import "./ApartmentPage.css";

import Host from "../../components/Host/Host";
import Gallery from "../../components/Gallery/Gallery";
import Tag from "../../components/Tag/Tag";
import Collaps from "../../components/Collaps/Collaps";
import Rating from "../../components/Rating/Rating";

class ApartmentPage extends Component {
  render() {
    const idParam = this.props.match.params.id;
    if (!data.some((elt) => elt.id === idParam)) return <Redirect to="/404" />;

    const currentLocation = data.filter((elt) => elt.id === idParam)[0];

    const {
      title,
      location,
      pictures,
      host,
      equipments,
      tags,
      rating,
      description,
    } = currentLocation;

    return (
      <div className="apartment-page">
        <Gallery images={pictures} />
        <main className="main-apartment">
          <section className="apartment-header">
            <div>
              <h2>{title}</h2>
              <p>{location}</p>
              {tags.map((tag, index) => (
                <Tag key={index} content={tag} />
              ))}
            </div>
            <div className="apartment-header-host">
              <Host name={host.name} img={host.picture} />
              <Rating fill={rating} />
            </div>
          </section>
          <section className="apartment-details">
            <Collaps title="Description" content={description} />
            <Collaps title="Equipements" content={equipments} />
          </section>
        </main>
      </div>
    );
  }
}

export default ApartmentPage;
