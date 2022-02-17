import React, { Component } from "react";
import "./Tag.css";

class Tag extends Component {
  render() {
    return <div className="apartmentTags">{this.props.content}</div>;
  }
}

export default Tag;
