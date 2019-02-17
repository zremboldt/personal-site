import React from "react";
import LogoGithub from "../images/LogoGithub";
import LogoCodepen from "../images/LogoCodepen";

const WorkCard = props => {
  const { url, name, text } = props.work;
  return (
    <a href={url} className="card cardWork">
      <h3>{name}</h3>
      <p>{text}</p>
      <div className="tab">{name === "GitHub" ? <LogoGithub /> : <LogoCodepen />}</div>
    </a>
  );
};

export default WorkCard;
