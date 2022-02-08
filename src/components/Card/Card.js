import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <Link to={`apartment/${this.props.id}`} className="cardBox">
          <img
            src={this.props.cover}
            alt={this.props.title}
            className="cardImg"
          />
          <div className="cardDiv"></div>
          <h2>{this.props.title}</h2>
        </Link>
      </div>
    );
  }
}

export default Card;
