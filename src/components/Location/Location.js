import React, { Component } from "react";

class Location extends Component {
  render() {
    return (
      <div>
        <h3 className="locationapartment">{this.props.location}</h3>
      </div>
    );
  }
}

export default Location;
