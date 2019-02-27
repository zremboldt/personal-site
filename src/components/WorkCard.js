import React, { Component } from "react";
import LogoGithub from "../images/LogoGithub";
import LogoCodepen from "../images/LogoCodepen";

export default class WorkCard extends Component {
  render() {
    const { name, text } = this.props.work;
    return (
      <>
        <h3>{name}</h3>
        <p>{text}</p>
        <div className="tab">{name === "GitHub" ? <LogoGithub /> : <LogoCodepen />}</div>
      </>
    );
  }
}
