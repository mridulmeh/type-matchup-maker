
import React from "react";
import "./card.css";

export const CardHeader: React.FC = (props) => {
  return <div className='card-header'>{props.children}</div>;
};
