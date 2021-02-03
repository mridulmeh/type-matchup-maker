import React from "react";
import { playerMaker } from "../../utils/player";
import { ScoreBoardHandler } from "../../utils/scoreKeeper";
import { GameArea } from "../game-area";
import { Header } from "../header";
import { ScoreBoard } from "../score-board/score-board";
import { Settings } from "../settings";
import "./game-board.css";

export type GameBoardProps = {
  scoreBoardHandler: ScoreBoardHandler;
  header: React.ReactNode;
};

export const GameBoard: React.FC<GameBoardProps> = (props) => {
  const playerAHandler = playerMaker(0, "d");
  const playerBHandler = playerMaker(1, "a");

  return (
    <>
      <Header header={"Rock Papers Scissors"} />
      <div className="gameContainer">
        <GameArea playerHandler={playerAHandler} />
        <ScoreBoard />
        <GameArea playerHandler={playerBHandler} />
        <Settings />
      </div>
    </>
  );
};
