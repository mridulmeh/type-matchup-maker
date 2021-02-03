import React from "react";
import "./card.css";

export const Card: React.FC = (props) => {
  return (
    <div className="card-container">
      <div className="card">{props.children}</div>
    </div>
  );
};
