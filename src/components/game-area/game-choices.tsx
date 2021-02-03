import React from "react";
import "./game-area.css";

export type GameAreaChoicesProps = {
  choices: string[];
};

export const GameAreaChoices: React.FC<GameAreaChoicesProps> = (props) => {
  const { choices } = props;

  return (
    <div className="gameAreaChoicesContainer">
      {choices.map((choice) => {
        return <div className="gameAreaChoices">{choice}</div>;
      })}
    </div>
  );
};
