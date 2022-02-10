import React, { Component } from "react";

class Tags extends Component {
  render() {
    return (
      <div className="containerTags">
        <div className="apartmentTags">{this.props.tag}</div>
      </div>
    );
  }
}

export default Tags;
