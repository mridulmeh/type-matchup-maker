import React from "react";
import { ScoreBoardHandler } from "../../utils/scoreKeeper";
import { GameArea } from "../game-area";
import { Header } from "../header";
import { ScoreBoard } from "../score-board/score-board";
import { Settings } from "../settings";

export type GameBoardProps = {
  scoreBoardHandler: ScoreBoardHandler;
};

export const GameBoard: React.FC<GameBoardProps> = (props) => {
  return (
    <div>
      <Header />
      <GameArea />
      <GameArea />
      <ScoreBoard />
      <Settings />
    </div>
  );
};
