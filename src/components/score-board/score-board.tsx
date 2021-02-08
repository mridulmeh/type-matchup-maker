import React from "react";
import { Card, CardContent, CardHeader } from "../common/card";
import "./score-board.css";
import "../common.css";
import { Player, playerMap, PlayerType } from "../../utils/player";

type ScoreTableProps = {
  players: Player[];
  score: number[];
  onTypeChange: (index: number, value: PlayerType) => void;
};

export const ScoreTable: React.FC<ScoreTableProps> = ({
  players,
  score,
  onTypeChange,
}) => {
  return (
    <table className="scoreBoardTable">
      <tbody>
        {players.map((player, i) => {
          return (
            <tr>
              {[player.name, score[i]].map((value) => {
                return <td className="">{value}</td>;
              })}
              <td>
                <select
                  value={player.type}
                  onChange={(e) => onTypeChange(i, e.target.value as PlayerType)}
                >
                  {Object.keys(playerMap).map((option) => {
                    return <option value={option}>{playerMap[option]}</option>;
                  })}
                </select>
              </td>
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

export const GameOptions: React.FC<GameOptionsProps> = ({
  endGame,
  restartGame,
}) => {
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
  players: Player[];
  score: number[];
  endGame: () => void;
  restartGame: () => void;
  onTypeChange: (index: number, value: PlayerType) => void;
};

export const ScoreBoard: React.FC<ScoreBoardProps> = ({
  players,
  score,
  endGame,
  restartGame,
  onTypeChange,
}) => {
  return (
    <div className="scoreBoardContainer">
      <Card>
        <CardHeader>Scoreboard</CardHeader>
        <CardContent>
          <ScoreTable
            players={players}
            score={score}
            onTypeChange={onTypeChange}
          ></ScoreTable>
          <GameOptions
            endGame={endGame}
            restartGame={restartGame}
          ></GameOptions>
        </CardContent>
      </Card>
    </div>
  );
};
