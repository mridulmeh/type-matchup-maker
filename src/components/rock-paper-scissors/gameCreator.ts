import { MatchupHandler, matchupMaker } from "../../utils/matchupMaker";
import { ScoreBoardHandler, scoreKeeper } from "../../utils/scoreKeeper";

export const createRockPaperScissorsMatchup = () => {
  const matchupHandler = matchupMaker(["Rock", "Paper", "Scissors"]);
  matchupHandler.increaseAttack("Paper", "Rock", 1);
  matchupHandler.increaseAttack("Rock", "Scissors", 1);
  matchupHandler.increaseAttack("Scissors", "Paper", 1);
  return matchupHandler;
};
export const createRockPaperScissorsGame = (storedScoreBoardHandler?: {
  score: number[];
  maxScore: number;
  gameStatus: 'running' | 'paused' | 'end'
}): {
  scoreBoardHandler: ScoreBoardHandler;
  matchupHandler: MatchupHandler;
} => {
  const matchupHandler = createRockPaperScissorsMatchup();
  const scoreBoardHandler = scoreKeeper(matchupHandler.get());
  if (storedScoreBoardHandler) {
    scoreBoardHandler.setMaxScore(storedScoreBoardHandler.maxScore);
    scoreBoardHandler.setScore(storedScoreBoardHandler.score);
    scoreBoardHandler.setGameStatus(storedScoreBoardHandler.gameStatus);
  }
  return {
    scoreBoardHandler,
    matchupHandler,
  };
};
