import React, { Component } from "react";

class Host extends Component {
  render() {
    return (
      <div className="apartmentHost">
        <p className="apartmentNameHost">{this.props.host.name}</p>
        <img
          className="apartmentImgHost"
          alt=""
          src={this.props.host.picture}
        />
      </div>
    );
  }
}

export default Host;
