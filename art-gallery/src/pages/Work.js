import React from "react";
import { WorkList } from "../helpers/WorkList";
import MenuItem from "../components/WorkItem";
import "../styles/Work.css";

function Work() {
  return (
    <div className="work">
      <h1 className="workTitle">Our Work</h1>
      <div className="workList">
        {WorkList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Work;