import React from "react";
import { Card, CardContent, CardHeader } from "../common/card";
import "./score-board.css";
import "../common.css";



type ScoreBoardProps = {
  players: string[]
  score: number[]
}

export const ScoreTable: React.FC<ScoreBoardProps> = ({ players, score }) => {
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

export const GameOptions = () => {
  return (
    <div>
      <button>Restart Game</button>
      <button>End Game</button>
    </div>
  );
};

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ players, score }) => {
  return (
    <div className="scoreBoardContainer">
      <Card>
        <CardHeader>Scoreboard</CardHeader>
        <CardContent>
          <ScoreTable players={players} score={score}></ScoreTable>
          <GameOptions></GameOptions>
        </CardContent>
      </Card>
    </div>
  );
};
