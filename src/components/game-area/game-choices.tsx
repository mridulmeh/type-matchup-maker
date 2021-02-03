import React from "react";
import "./game-area.css";
import "../common.css";
import { ResourceMap } from "../../utils/resources";

export type ChoiceProps = {
  choice: string;
  disabled: boolean;
  onChoiceSelect: (choice: string) => void;
};

const Choice: React.FC<ChoiceProps> = (props) => {
  const { choice, onChoiceSelect, disabled } = props;

  const ResourceComponent = ResourceMap[choice];
  return (
    <div
      className={`singleChoiceContainer ${!disabled ? "pointer" : "disabled"}`}
      onClick={() => !disabled && onChoiceSelect(choice)}
    >
      <div className="singleChoice centered-display">
        {ResourceComponent ? <ResourceComponent /> : choice}
      </div>
    </div>
  );
};

export type GameAreaChoicesProps = {
  choices: string[];
  disabled: boolean;
  onChoiceSelect: (choice: string) => void;
};

export const GameAreaChoices: React.FC<GameAreaChoicesProps> = (props) => {
  const { choices, onChoiceSelect, disabled = false } = props;

  return (
    <div className="gameAreaChoicesContainer">
      {choices.map((choice) => {
        return (
          <Choice
            disabled={disabled}
            key={choice}
            choice={choice}
            onChoiceSelect={onChoiceSelect}
          />
        );
      })}
    </div>
  );
};
