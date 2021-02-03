import React from "react";
import { MatchupHandler } from "../../utils/matchupMaker";
import { PlayerHandler } from "../../utils/player";
import { Card, CardContent, CardHeader } from "../common/card";
import "./game-area.css";
import { GameAreaChoices } from "./game-choices";
import { GameTurnChoices } from "./game-turn";

export type GameAreaProps = {
  playerHandler: PlayerHandler;
  matchupHandler: MatchupHandler;
  onChoiceSelect: (choice: string) => void;
  playerScore: number;
  opponentScore: number;
};

export const GameArea: React.FC<GameAreaProps> = (props) => {
  const {
    playerHandler,
    matchupHandler,
    onChoiceSelect,
    playerScore,
    opponentScore,
  } = props;
  const [selectedChoice, setSelectedChoice] = React.useState<
    string | undefined
  >();
  const player = playerHandler.get();

  React.useEffect(() => {
    selectedChoice && onChoiceSelect(selectedChoice);
  }, [selectedChoice]);

  React.useEffect(() => {
    setTimeout(() => {
      setSelectedChoice(undefined);
    }, 500);
  }, [playerScore, opponentScore]);

  return (
    <div className="gameAreaContainer">
      <Card>
        <CardHeader>
          {player.name} - {playerScore}
        </CardHeader>
        <CardContent>
          <GameAreaChoices
            choices={matchupHandler.getChoices()}
            onChoiceSelect={(choice: string) => setSelectedChoice(choice)}
          />
          <GameTurnChoices selectedChoice={selectedChoice} />
        </CardContent>
      </Card>
    </div>
  );
};
