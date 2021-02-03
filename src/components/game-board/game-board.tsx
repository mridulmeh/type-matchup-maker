import React from "react";
import { MatchupHandler } from "../../utils/matchupMaker";
import { playerMaker } from "../../utils/player";
import { ScoreBoardHandler } from "../../utils/scoreKeeper";
import { GameArea } from "../game-area";
import { Header } from "../header";
import { ScoreBoard } from "../score-board/score-board";
import { Settings } from "../settings";
import "./game-board.css";

export type GameBoardProps = {
  scoreBoardHandler: ScoreBoardHandler;
  matchupHandler: MatchupHandler
  header: React.ReactNode;
};

export const GameBoard: React.FC<GameBoardProps> = (props) => {
  const { scoreBoardHandler, matchupHandler } = props;
  const playerAHandler = playerMaker(0, "d");
  const playerBHandler = playerMaker(1, "a");

  return (
    <>
      <Header header={"Rock Papers Scissors"} />
      <div className="gameContainer">
        <GameArea
          playerHandler={playerAHandler}
          matchupHandler={matchupHandler}
        />
        <ScoreBoard />
        <GameArea
          playerHandler={playerBHandler}
          matchupHandler={matchupHandler}
        />
        <Settings />
      </div>
    </>
  );
};
