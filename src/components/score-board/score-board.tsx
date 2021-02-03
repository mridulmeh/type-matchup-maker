import React from "react";
import { Card, CardContent, CardHeader } from "../common/card";
import "./score-board.css";
import "../common.css";

type ScoreTableProps = {
  players: string[];
  score: number[];
};

export const ScoreTable: React.FC<ScoreTableProps> = ({ players, score }) => {
  return (
    <table className="scoreBoardTable">
      <tbody>
        {players.map((player, i) => {
          return (
            <tr>
              {[player, score[i]].map((value) => {
                return <td className="">{value}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export type GameOptionsProps = {
  endGame: () => void;
  restartGame: () => void;
};

export const GameOptions: React.FC<GameOptionsProps> = ({ endGame, restartGame }) => {
  return (
    <div className="gameOptions centered-display">
      <button className="optionButton restart" onClick={() => restartGame()}>
        Restart Game
      </button>
      <button className="optionButton end" onClick={() => endGame()}>
        End Game
      </button>
    </div>
  );
};

type ScoreBoardProps = {
  players: string[];
  score: number[];
  endGame: () => void;
  restartGame: () => void;
};

export const ScoreBoard: React.FC<ScoreBoardProps> = ({
  players,
  score,
  endGame,
  restartGame,
}) => {
  return (
    <div className="scoreBoardContainer">
      <Card>
        <CardHeader>Scoreboard</CardHeader>
        <CardContent>
          <ScoreTable players={players} score={score}></ScoreTable>
          <GameOptions
            endGame={endGame}
            restartGame={restartGame}
          ></GameOptions>
        </CardContent>
      </Card>
    </div>
  );
};
