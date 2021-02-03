import React from "react";
import "./game-area.css";

export type ChoiceProps = {
  choice: string;
};

const Choice: React.FC<ChoiceProps> = (props) => {
  const { choice } = props;
  return (
    <div className="singleChoiceContainer">
      <div className="singleChoice">{choice}</div>
    </div>
  );
};

export type GameAreaChoicesProps = {
  choices: string[];
};

export const GameAreaChoices: React.FC<GameAreaChoicesProps> = (props) => {
  const { choices } = props;

  return (
    <div className="gameAreaChoicesContainer">
      {choices.map((choice) => {
        return <Choice choice={choice} />;
      })}
    </div>
  );
};
