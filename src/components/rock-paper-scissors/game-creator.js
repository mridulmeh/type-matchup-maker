import { matchupMaker } from "../utils/matchupMaker";
import { scoreKeeper } from "../utils/scoreKeeper";

export const createRockPaperScissorsMatchup = () => {
  const matchupHandler = matchupMaker(["Rock", "Paper", "Scissors"]);
  matchupHandler.increaseAttack("Paper", "Rock", 1);
  matchupHandler.increaseAttack("Rock", "Scissors", 1);
  matchupHandler.increaseAttack("Scissors", "Paper", 1);
  return matchupHandler.get();
};
export const createRockPaperScissorsGame = () => {
  const rockPaperScissorsMatchup = createRockPaperScissorsMatchup();
  const scoreBoardHandler = scoreKeeper(rockPaperScissorsMatchup);

  return scoreBoardHandler;
};
