import React from "react";
import { getScoreFromStore } from "../../utils/storage";
import { GameBoard } from "../game-board";
import { createRockPaperScissorsGame } from "./gameCreator";

export const RockPaperScissors: React.FC = () => {
  const { scoreBoardHandler, matchupHandler } = createRockPaperScissorsGame(getScoreFromStore())
  return (
    <GameBoard
      matchupHandler={matchupHandler}
      scoreBoardHandler={scoreBoardHandler}
      header={"Rock Papers Scissors"}
    />
  );
};
