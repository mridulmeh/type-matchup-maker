import React from "react";
import { ScoreBoardHandler } from "../../utils/scoreKeeper";
import { GameBoard } from "../game-board";
import { createRockPaperScissorsGame } from "./gameCreator";

export const RockPaperScissors: React.FC = () => {
  const scoreBoardHandler: ScoreBoardHandler = createRockPaperScissorsGame();
  scoreBoardHandler.setMaxScore(3);

  return <GameBoard scoreBoardHandler={scoreBoardHandler} />;
};
