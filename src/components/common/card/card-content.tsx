import React from "react";
import "./card.css";

export const CardContent: React.FC = (props) => {
  return (
    <div className="card-content-container">
      <div className="card-content">{props.children}</div>
    </div>
  );
};
