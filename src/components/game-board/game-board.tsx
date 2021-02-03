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
  const [score, setScore] = React.useState(scoreBoardHandler.getScore());
  const [gameStatus, setGameStatus] = React.useState(scoreBoardHandler.getGameStatus());

  React.useEffect(() => {
    if (currentTurnChoices[0]?.length && currentTurnChoices[1]?.length) {
      scoreBoardHandler.playTurn(currentTurnChoices[0], currentTurnChoices[1]);
      setScore(scoreBoardHandler.getScore());
      setGameStatus(scoreBoardHandler.getGameStatus())
      setTimeout(() => {
        setCurrentTurnChoices([]);
      }, 500);
    }
  }, [currentTurnChoices]);


  console.log(gameStatus)
  return (
    <>
      <Header header={"Rock Papers Scissors"} />
      <div className="gameContainer">
        <GameArea
          key={"first-player"}
          gameStatus={gameStatus}
          playerHandler={playerAHandler}
          matchupHandler={matchupHandler}
          selectedChoice={currentTurnChoices[0]}
          isChoiceHidden={
            !(currentTurnChoices[0]?.length && currentTurnChoices[1]?.length)
          }
          onChoiceSelect={(choice: string) =>
            setCurrentTurnChoices([choice, currentTurnChoices[1] ?? ""])
          }
          playerScore={score[0]}
          opponentScore={score[1]}
        />
        <ScoreBoard />
        <GameArea
          key={"second-player"}
          gameStatus={gameStatus}
          playerHandler={playerBHandler}
          matchupHandler={matchupHandler}
          isChoiceHidden={
            !(currentTurnChoices[0]?.length && currentTurnChoices[1]?.length)
          }
          selectedChoice={currentTurnChoices[1]}
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
