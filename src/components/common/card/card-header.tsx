
import React from "react";
import "./card.css";
import "../../common.css"

export const CardHeader: React.FC = (props) => {
  return <div className='card-header centered-display'>{props.children}</div>;
};
