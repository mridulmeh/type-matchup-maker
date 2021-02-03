import React from "react";
import "./game-area.css";
import "../common.css";
import { ResourceMap } from "../../utils/resources";

export type GameTurnProps = {
  selectedChoice: string | undefined;
};

export const GameTurnChoices: React.FC<GameTurnProps> = (props) => {
  const { selectedChoice } = props;

  if (!selectedChoice) {
    return null;
  }
  const ResourceComponent = ResourceMap[selectedChoice];

  return (
    <div className="gameTurnContainer centered-display">
      <div className="gameTurnInnerContainer centered-display">
        {ResourceComponent ? <ResourceComponent /> : selectedChoice}
      </div>
    </div>
  );
};
