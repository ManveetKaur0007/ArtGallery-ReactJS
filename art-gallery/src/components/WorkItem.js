import React from "react";

function WorkItem({ image, name}) {
  return (
    <div className="workItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
    </div>
  );
}

export default WorkItem;