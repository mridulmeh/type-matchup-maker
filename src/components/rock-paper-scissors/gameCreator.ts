import { PlayerHandler } from "./../../utils/player";
import { MatchupHandler, matchupMaker } from "../../utils/matchupMaker";
import { Player, playerMaker } from "../../utils/player";
import { ScoreBoardHandler, scoreKeeper } from "../../utils/scoreKeeper";

export const createRockPaperScissorsMatchup = () => {
  const matchupHandler = matchupMaker(["Rock", "Paper", "Scissors"]);
  matchupHandler.increaseAttack("Paper", "Rock", 1);
  matchupHandler.increaseAttack("Rock", "Scissors", 1);
  matchupHandler.increaseAttack("Scissors", "Paper", 1);
  return matchupHandler;
};

export type StoredHandlerValues = {
  score: number[];
  maxScore: number;
  gameStatus: "running" | "paused" | "end";
  playerA: Player;
  playerB: Player;
};

export const createRockPaperScissorsGame = (
  storedScoreBoardHandler?: StoredHandlerValues
): {
  scoreBoardHandler: ScoreBoardHandler;
  matchupHandler: MatchupHandler;
  playerAHandler: PlayerHandler;
  playerBHandler: PlayerHandler;
} => {
  const matchupHandler = createRockPaperScissorsMatchup();
  const scoreBoardHandler = scoreKeeper(matchupHandler.get());

  const playerAHandler = playerMaker(0, "First Player", "user");
  const playerBHandler = playerMaker(1, "Second Player", "computer");

  if (storedScoreBoardHandler) {
    scoreBoardHandler.setMaxScore(storedScoreBoardHandler.maxScore);
    scoreBoardHandler.setScore(storedScoreBoardHandler.score);
    scoreBoardHandler.setGameStatus(storedScoreBoardHandler.gameStatus);
    const { playerA, playerB } = storedScoreBoardHandler;

    if (playerA) {
      playerAHandler.setName(playerA.name);
      playerAHandler.setType(playerA.type);
    }
    if (playerB) {
      playerBHandler.setName(playerB.name);
      playerBHandler.setType(playerB.type);
    }
  }

  return {
    scoreBoardHandler,
    matchupHandler,
    playerAHandler,
    playerBHandler,
  };
};
