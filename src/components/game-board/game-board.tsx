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
  matchupHandler: MatchupHandler;
  header: React.ReactNode;
};

export const GameBoard: React.FC<GameBoardProps> = (props) => {
  const { scoreBoardHandler, matchupHandler } = props;
  const playerAHandler = playerMaker(0, "First Player");
  const playerBHandler = playerMaker(1, "Second Player");
  const [currentTurnChoices, setCurrentTurnChoices] = React.useState<string[]>(
    []
  );
  const [score, setScore] = React.useState(scoreBoardHandler.getScore())

  React.useEffect(() => {
    if (currentTurnChoices[0]?.length && currentTurnChoices[1]?.length) {
      console.log(currentTurnChoices[0], currentTurnChoices[1]);
      scoreBoardHandler.playTurn(currentTurnChoices[0], currentTurnChoices[1]);
      setScore(scoreBoardHandler.getScore())
      setCurrentTurnChoices([])
    }
  }, [currentTurnChoices]);
  console.log(score)
  return (
    <>
      <Header header={"Rock Papers Scissors"} />
      <div className="gameContainer">
        <GameArea
          key={"first-player"}
          playerHandler={playerAHandler}
          matchupHandler={matchupHandler}
          onChoiceSelect={(choice: string) =>
            setCurrentTurnChoices([choice, currentTurnChoices[1] ?? ""])
          }
          playerScore={score[0]}
          opponentScore={score[1]}
        />
        <ScoreBoard />
        <GameArea
          key={"second-player"}
          playerHandler={playerBHandler}
          matchupHandler={matchupHandler}
          onChoiceSelect={(choice: string) =>
            setCurrentTurnChoices([currentTurnChoices[0] ?? "", choice])
          }
          playerScore={score[1]}
          opponentScore={score[0]}
        />
        <Settings />
      </div>
    </>
  );
};
