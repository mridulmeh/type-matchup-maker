import React from "react";
import { MatchupHandler } from "../../utils/matchupMaker";
import { PlayerHandler } from "../../utils/player";
import { Card, CardContent, CardHeader } from "../common/card";
import "./game-area.css";
import { GameAreaChoices } from "./game-choices";

export type GameAreaProps = {
  playerHandler: PlayerHandler;
  matchupHandler: MatchupHandler;
};

export const GameArea: React.FC<GameAreaProps> = (props) => {
  const { playerHandler, matchupHandler } = props;
  const player = playerHandler.get();

  return (
    <div className="gameAreaContainer">
      <Card>
        <CardHeader>{player.name}</CardHeader>
        <CardContent>
          <GameAreaChoices choices={matchupHandler.getChoices()} />
        </CardContent>
      </Card>
    </div>
  );
};
