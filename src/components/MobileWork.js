import React from "react";
import { workData } from "./data";
import WorkCard from "./WorkCard";

const WorkMobile = () => {
  return (
    <div className="ctr-work mobile">
      {workData.map((item, i) => (
        <WorkCard work={item} key={i} />
      ))}
      <hr />
    </div>
  );
};

export default WorkMobile;
