import React from "react";
import { ScoreBoardHandler } from "../../utils/scoreKeeper";
import { GameArea } from "../game-area";
import { Header } from "../header";
import { ScoreBoard } from "../score-board/score-board";
import { Settings } from "../settings";
import './game-board.css'


export type GameBoardProps = {
  scoreBoardHandler: ScoreBoardHandler;
  header: React.ReactNode;
};

export const GameBoard: React.FC<GameBoardProps> = (props) => {
  return (
    <>
      <Header header={"Rock Papers Scissors"} />
      <div className="gameContainer">
        <GameArea />
        <ScoreBoard />
        <GameArea />
        <Settings />
      </div>
    </>
  );
};
