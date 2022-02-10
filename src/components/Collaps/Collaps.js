import React, { Component } from "react";
import "./Collaps.css";

class Collaps extends Component {
  state = {
    show: false,
    className: "isClose",
    direction: "up",
  };

  showContent = () => {
    this.setState({
      show: !this.state.show,
      direction: "down",
    });
    this.state.show
      ? this.setState({ className: "isClose" })
      : this.setState({ className: "isOpen" });
  };

  getCollapsVisible = () => {
    return (
      <div
        className={`collapsVisible ${this.state.className}`}
        onClick={this.showContent}
      >
        <h3>{this.props.title}</h3>
        <i className={`fas fa-chevron-${this.state.direction}`}></i>
      </div>
    );
  };

  getCollapsContent = () => {
    if (Array.isArray(this.props.content)) {
      return (
        <div className={`collapsContent ${this.state.className}`}>
          {this.props.content.map((item, index) => (
            <p key={`item-${index}`}>{item}</p>
          ))}
        </div>
      );
    }

    return (
      <div className={`collapsContent ${this.state.className}`}>
        <p>{this.props.content}</p>
      </div>
    );
  };

  render() {
    return (
      <article className="collapsArticle">
        {this.getCollapsVisible()}
        {this.getCollapsContent()}
      </article>
    );
  }
}

export default Collaps;
