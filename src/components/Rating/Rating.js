import React, { Component } from "react";
import "./Rating.css";

class Rating extends Component {
  render() {
    const { fill } = this.props;
    const starsClasses = [];

    for (let i = 0; i < 5; i++) {
      i < fill
        ? starsClasses.push("fas fa-star fill")
        : starsClasses.push("fas fa-star");
    }

    return (
      <div className="rating">
        {starsClasses.map((star, index) => (
          <span key={index} className={star}></span>
        ))}
      </div>
    );
  }
}

export default Rating;
