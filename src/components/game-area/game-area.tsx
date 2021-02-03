import React from "react";
import { MatchupHandler } from "../../utils/matchupMaker";
import { PlayerHandler } from "../../utils/player";
import { Card, CardContent, CardHeader } from "../common/card";
import "./game-area.css";
import { GameAreaChoices } from "./game-choices";
import { GameTurnChoices } from "./game-turn";

export type GameAreaProps = {
  playerHandler: PlayerHandler;
  matchupHandler: MatchupHandler;
  onChoiceSelect: (choice: string) => void;
  playerScore: number;
  opponentScore: number;
  selectedChoice: string
};

export const GameArea: React.FC<GameAreaProps> = (props) => {
  const {
    playerHandler,
    matchupHandler,
    onChoiceSelect,
    playerScore,
    selectedChoice
  } = props;

  const player = playerHandler.get();

  return (
    <div className="gameAreaContainer">
      <Card>
        <CardHeader>
          {player.name} - {playerScore}
        </CardHeader>
        <CardContent>
          <GameAreaChoices
            choices={matchupHandler.getChoices()}
            onChoiceSelect={(choice: string) => onChoiceSelect(choice)}
          />
          <GameTurnChoices selectedChoice={selectedChoice} />
        </CardContent>
      </Card>
    </div>
  );
};
