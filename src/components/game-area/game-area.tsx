import React from "react";
import { Player, PlayerHandler } from "../../utils/player";
import { Card, CardContent, CardHeader } from "../common/card";
import "./game-area.css";

export type GameAreaProps = {
  playerHandler: PlayerHandler;
};

export const GameArea: React.FC<GameAreaProps> = (props) => {
  const { playerHandler } = props;
  const player = playerHandler.get();
  return (
    <div className="gameAreaContainer">
      <Card>
        <CardHeader>{player.name}</CardHeader>
        <CardContent>Content</CardContent>
      </Card>
    </div>
  );
};
