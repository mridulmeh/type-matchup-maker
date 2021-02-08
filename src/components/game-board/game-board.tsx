import React from "react";
import { MatchupHandler } from "../../utils/matchupMaker";
import { PlayerHandler, playerMaker, PlayerType } from "../../utils/player";
import { ScoreBoardHandler } from "../../utils/scoreKeeper";
import { storeScore } from "../../utils/storage";
import { GameArea } from "../game-area";
import { Header } from "../header";
import { ScoreBoard } from "../score-board/score-board";
import "./game-board.css";

export type GameBoardProps = {
  scoreBoardHandler: ScoreBoardHandler;
  matchupHandler: MatchupHandler;
  header: React.ReactNode;
  playerAHandler: PlayerHandler;
  playerBHandler: PlayerHandler;
};

export const selectChoiceRandomly = (numberOfChoices: number) => {
  return Math.floor(Math.random() * numberOfChoices);
};

export const GameBoard: React.FC<GameBoardProps> = (props) => {
  const {
    scoreBoardHandler,
    matchupHandler,
    playerAHandler,
    playerBHandler,
  } = props;

  const choices = matchupHandler.getChoices();
  const [playerA, setPlayerA] = React.useState(playerAHandler.get());
  const [playerB, setPlayerB] = React.useState(playerBHandler.get());

  const [currentTurnChoices, setCurrentTurnChoices] = React.useState<string[]>(
    []
  );
  const [score, setScore] = React.useState(scoreBoardHandler.getScore());
  const [gameStatus, setGameStatus] = React.useState(
    scoreBoardHandler.getGameStatus()
  );

  React.useEffect(() => {
    if (currentTurnChoices[0]?.length && currentTurnChoices[1]?.length) {
      scoreBoardHandler.playTurn(currentTurnChoices[0], currentTurnChoices[1]);
      setScore(scoreBoardHandler.getScore());
      setGameStatus(scoreBoardHandler.getGameStatus());
      storeScore(scoreBoardHandler, playerAHandler, playerBHandler);
      setTimeout(() => {
        setCurrentTurnChoices([]);
      }, 1000);
    }
  }, [currentTurnChoices]);

  const changePlayerAType = (type: PlayerType) => {
    setPlayerA({ ...playerA, type });
    playerAHandler.setType(type);
  };
  const changePlayerBType = (type: PlayerType) => {
    setPlayerB({ ...playerB, type });
    playerBHandler.setType(type);
  };

  const endGame = (scoreBoardHandler: ScoreBoardHandler) => {
    scoreBoardHandler.setGameStatus("end");
    setGameStatus(scoreBoardHandler.getGameStatus());
    storeScore(scoreBoardHandler, playerAHandler, playerBHandler);
  };

  const restartGame = (scoreBoardHandler: ScoreBoardHandler) => {
    scoreBoardHandler.setGameStatus("running");
    setGameStatus(scoreBoardHandler.getGameStatus());
    setScore([0, 0]);
    scoreBoardHandler.setScore([0, 0]);
    setCurrentTurnChoices([]);
    storeScore(scoreBoardHandler, playerAHandler, playerBHandler);
  };

  const changePlayerType = (index: number, type: PlayerType) => {
    index === 0 ? changePlayerAType(type) : changePlayerBType(type);
    restartGame(scoreBoardHandler);
    storeScore(scoreBoardHandler, playerAHandler, playerBHandler);
  };

  const playTurn = () => {
    const currentChoices = [];
    if (playerA.type === "computer") {
      currentChoices[0] = choices[selectChoiceRandomly(choices.length)];
    }
    if (playerB.type === "computer") {
      currentChoices[1] = choices[selectChoiceRandomly(choices.length)];
    }
    setCurrentTurnChoices([
      currentChoices[0] ?? currentTurnChoices[0] ?? "",
      currentChoices[1] ?? currentTurnChoices[1] ?? "",
    ]);
  };

  return (
    <>
      <Header header={"Rock Papers Scissors"} />
      <div className="gameContainer">
        <GameArea
          key={"first-player"}
          gameStatus={gameStatus}
          player={playerA}
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
        <ScoreBoard
          players={[playerA, playerB]}
          score={score}
          endGame={() => endGame(scoreBoardHandler)}
          restartGame={() => restartGame(scoreBoardHandler)}
          playTurn={playTurn}
          isPlayTurnDisabled={
            (playerA.type === "user" && playerB.type === "user") ||
            score[0] >= scoreBoardHandler.getMaxScore() ||
            score[1] >= scoreBoardHandler.getMaxScore()
          }
          onTypeChange={changePlayerType}
        />
        <GameArea
          key={"second-player"}
          gameStatus={gameStatus}
          player={playerB}
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
        {/* <Settings />/ */}
      </div>
    </>
  );
};
