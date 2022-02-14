import React, { Component } from "react";
import "./Tag.css";

class Tag extends Component {
  render() {
    return (
      <div className="containerTags">
        <div className="apartmentTags">{this.props.tag}</div>
      </div>
    );
  }
}

export default Tag;
