import { MatchupHandler, matchupMaker } from "../../utils/matchupMaker";
import { ScoreBoardHandler, scoreKeeper } from "../../utils/scoreKeeper";

export const createRockPaperScissorsMatchup = () => {
  const matchupHandler = matchupMaker(["Rock", "Paper", "Scissors"]);
  matchupHandler.increaseAttack("Paper", "Rock", 1);
  matchupHandler.increaseAttack("Rock", "Scissors", 1);
  matchupHandler.increaseAttack("Scissors", "Paper", 1);
  return matchupHandler;
};
export const createRockPaperScissorsGame = (): {
  scoreBoardHandler: ScoreBoardHandler;
  matchupHandler: MatchupHandler;
} => {
  const matchupHandler = createRockPaperScissorsMatchup();
  const scoreBoardHandler = scoreKeeper(matchupHandler.get());

  return {
    scoreBoardHandler,
    matchupHandler,
  };
};
