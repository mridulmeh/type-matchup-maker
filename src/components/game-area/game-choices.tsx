import React from "react";
import "./game-area.css";
import "../common.css";
import { ResourceMap } from "../../utils/resources";

export type ChoiceProps = {
  choice: string;
  onChoiceSelect: (choice: string) => void;
};

const Choice: React.FC<ChoiceProps> = (props) => {
  const { choice, onChoiceSelect } = props;

  const ResourceComponent = ResourceMap[choice];
  return (
    <div
      className="singleChoiceContainer"
      onClick={() => onChoiceSelect(choice)}
    >
      <div className="singleChoice centered-display">
        {ResourceComponent ? <ResourceComponent /> : choice}
      </div>
    </div>
  );
};

export type GameAreaChoicesProps = {
  choices: string[];
  onChoiceSelect: (choice: string) => void;
};

export const GameAreaChoices: React.FC<GameAreaChoicesProps> = (props) => {
  const { choices, onChoiceSelect } = props;

  return (
    <div className="gameAreaChoicesContainer">
      {choices.map((choice) => {
        return <Choice choice={choice} onChoiceSelect={onChoiceSelect} />;
      })}
    </div>
  );
};
