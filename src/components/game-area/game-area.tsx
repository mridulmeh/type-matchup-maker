import React from "react";
import { MatchupHandler } from "../../utils/matchupMaker";
import { Player, PlayerHandler } from "../../utils/player";
import { Card, CardContent, CardHeader } from "../common/card";
import "./game-area.css";
import { GameAreaChoices } from "./game-choices";
import { GameTurnChoices } from "./game-turn";

export type GameAreaProps = {
  player: Player;
  matchupHandler: MatchupHandler;
  onChoiceSelect: (choice: string) => void;
  playerScore: number;
  opponentScore: number;
  selectedChoice: string;
  isChoiceHidden: boolean;
  gameStatus: "running" | "paused" | "end";
};

const getCondition = (scoreA: number, scoreB: number) => {
  if (scoreA > scoreB) {
    return "Winner";
  } else if (scoreA < scoreB) {
    return "Loser";
  }

  return "Draw";
};

export const selectChoiceRandomly = (numberOfChoices: number) => {
  return Math.floor(Math.random() * numberOfChoices) + 1;
};

export const GameArea: React.FC<GameAreaProps> = (props) => {
  const {
    player,
    matchupHandler,
    onChoiceSelect,
    playerScore,
    opponentScore,
    selectedChoice,
    gameStatus,
    isChoiceHidden,
  } = props;

  const isAutomatic = player.type === "computer";
  const choices = matchupHandler.getChoices();

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!selectedChoice && isAutomatic && gameStatus === "running") {
  //       onChoiceSelect(choices[selectChoiceRandomly(choices.length)]);
  //     } else {
  //       clearInterval(interval);
  //     }
  //   }, 1000);
  // }, [selectedChoice, gameStatus]);

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
          <GameTurnChoices
            selectedChoice={selectedChoice}
            isChoiceHidden={isChoiceHidden}
          />
          <div className="gameTurnContainer centered-display">
            <div className="gameTurnInnerContainer centered-display">
              {gameStatus !== "running" &&
                getCondition(playerScore, opponentScore)}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
