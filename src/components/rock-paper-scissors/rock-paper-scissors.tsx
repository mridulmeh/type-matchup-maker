import React from "react";
import { ScoreBoardHandler } from "../../utils/scoreKeeper";
import { createRockPaperScissorsGame } from "./gameCreator";

export const RockPaperScissors = () => {
  const gameBoard: ScoreBoardHandler = createRockPaperScissorsGame();
  gameBoard.setMaxScore(3);

  return <div>{gameBoard.getMaxScore()}</div>;
};
