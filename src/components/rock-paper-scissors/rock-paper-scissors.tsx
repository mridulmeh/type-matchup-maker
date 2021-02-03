import React from "react";
import { ScoreBoardHandler } from "../../utils/scoreKeeper";
import { getItem } from "../../utils/storage";
import { GameBoard } from "../game-board";
import { createRockPaperScissorsGame } from "./gameCreator";
// console.log()

export const RockPaperScissors: React.FC = () => {
  const { scoreBoardHandler, matchupHandler } = createRockPaperScissorsGame(getItem())

  return (
    <GameBoard
      matchupHandler={matchupHandler}
      scoreBoardHandler={scoreBoardHandler}
      header={"Rock Papers Scissors"}
    />
  );
};
