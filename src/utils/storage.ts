import { ScoreBoardHandler } from "./scoreKeeper";

export const getScoreFromStore = () => {
  const value = localStorage.getItem("scoreBoard");
  return value ? JSON.parse(value) : null;
};

export const storeScore = (scoreBoardHandler: ScoreBoardHandler) => {
  localStorage.setItem(
    "scoreBoard",
    JSON.stringify({
      score: scoreBoardHandler.getScore(),
      gameStatus: scoreBoardHandler.getGameStatus(),
      maxScore: scoreBoardHandler.getMaxScore(),
    })
  );
};
