import React from "react";
import "./game-area.css";
import "../common.css";
import { ResourceMap } from "../../utils/resources";

export type GameTurnProps = {
  selectedChoice: string | undefined;
  isChoiceHidden: boolean;
};

export const GameTurnChoices: React.FC<GameTurnProps> = (props) => {
  const { selectedChoice, isChoiceHidden } = props;

  if (!selectedChoice) {
    return null;
  }
  const ResourceComponent = ResourceMap[selectedChoice];

  return (
    <div className="gameTurnContainer centered-display">
      <div className="gameTurnInnerContainer centered-display">
        {isChoiceHidden ? (
          <div className="hiddenChoice centered-display"> Choice Hidden</div>
        ) : ResourceComponent ? (
          <ResourceComponent />
        ) : (
          selectedChoice
        )}
      </div>
    </div>
  );
};
