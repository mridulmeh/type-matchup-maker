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
  selectedChoice: string;
  isChoiceHidden: boolean;
  gameStatus: "running" | "paused" | "end";
};

const selectChoiceRandomly = (numberOfChoices: number) => {
  return Math.floor(Math.random() * numberOfChoices) + 1;
};

export const GameArea: React.FC<GameAreaProps> = (props) => {
  const {
    playerHandler,
    matchupHandler,
    onChoiceSelect,
    playerScore,
    opponentScore,
    selectedChoice,
    gameStatus,
    isChoiceHidden
  } = props;

  const player = playerHandler.get();
  const isAutomatic = player.type === "computer";
  const choices = matchupHandler.getChoices();


  React.useEffect(() => {
    if (!selectedChoice && isAutomatic && gameStatus === "running") {
      const interval = setTimeout(() => {
        clearInterval(interval)
        onChoiceSelect(choices[selectChoiceRandomly(choices.length)]);
      }, 1000);
    }
  }, [selectedChoice]);

  return (
    <div className="gameAreaContainer">
      <Card>
        <CardHeader>
          {player.name} - {playerScore}
        </CardHeader>
        <CardContent>
          <GameAreaChoices
            choices={choices}
            disabled={isAutomatic || gameStatus !== "running"}
            onChoiceSelect={(choice: string) => onChoiceSelect(choice)}
          />
          <GameTurnChoices selectedChoice={selectedChoice} isChoiceHidden={isChoiceHidden} />
          <div className="gameTurnContainer centered-display">
            <div className="gameTurnInnerContainer centered-display">
              {gameStatus !== "running" &&
                (playerScore > opponentScore ? "Winner" : "Loser")}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
