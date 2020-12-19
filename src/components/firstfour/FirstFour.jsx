import React from "react";
import "./FirstFour.css";

function FirstFour({ title, image }) {
  return (
    <div className="first__four">
      <img src={image} alt="" />
      <div className="first__fourInfo">{title}</div>
    </div>
  );
}

export default FirstFour;
