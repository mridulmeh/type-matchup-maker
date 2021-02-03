import React from "react";
import { ScoreBoardHandler } from "../../utils/scoreKeeper";
import { GameArea } from "../game-area";
import { GameBoard } from "../game-board";
import { Header } from "../header";
import { ScoreBoard } from "../score-board/score-board";
import { Settings } from "../settings";
import { createRockPaperScissorsGame } from "./gameCreator";

export const RockPaperScissors: React.FC = () => {
  const scoreBoardHandler: ScoreBoardHandler = createRockPaperScissorsGame();
  scoreBoardHandler.setMaxScore(3);

  return <GameBoard scoreBoardHandler={scoreBoardHandler} />;
};
