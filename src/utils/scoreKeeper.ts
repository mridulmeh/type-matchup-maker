import { Matchup } from "./matchupMaker";

export type ScoreBoardHandler = {
  getMatchup: () => Matchup;
  getScore: () => number[];
  getMaxScore: () => number;
  getMaxTurns: () => number;
  getGameStatus: () => "running" | "paused" | "end";
  playTurn: (playerAChoice: string, playerBChoice: string) => void;
  setScore: (score: number[]) => void;
  setMatchup: (matchup: Matchup) => void;
  setMaxScore: (score: number) => void;
  setMaxTurns: (turns: number) => void;
};

/**
 * The objective of score is to have a turn with attack and defense:
 *
 * @param {Matchup} matchup
 */
export const scoreKeeper = (matchupInput: Matchup): ScoreBoardHandler => {
  let matchup: Matchup = matchupInput;
  let maxTurns = Number.POSITIVE_INFINITY;
  let maxScore = Number.POSITIVE_INFINITY;
  let gameStatus: "running" | "paused" | "end" = "running";
  let score = [0, 0]; // 2 players constant for now

  const setMaxTurns = (turns: number) => {
    maxTurns = turns;
  };

  const setMaxScore = (newMaxScore: number) => {
    maxScore = newMaxScore;
  };

  const setScore = (newScore: number[]) => {
    score = newScore;
  };

  const setMatchup = (newMatchup: Matchup) => {
    matchup = newMatchup;
  };

  const attack = (choiceA: string, choiceB: string) => {
    // Attack and Defesne stats are used to determine the
    // outcome of the matchup and how much score each turn will
    // evaluate to
    // Missing attack stat against a particular type automatically
    // means there will be no score for that player
    const attackStat = matchup[choiceA].Attack?.[choiceB] ?? 0;

    // The defense stat reduces the amount of points an attack could
    // score
    const defenseStat = matchup[choiceB].Defense?.[choiceA] ?? 0;

    return Math.max(0, attackStat - defenseStat);
  };

  const playTurn = (playerAChoice: string, playerBChoice: string) => {
    if (score[0] < maxScore && score[1] < maxScore) {
      // Both players attack each turn and score respective points
      // based on how much their attack would affect the outcome
      const playerAScoreChange = attack(playerAChoice, playerBChoice);
      const playerBScoreChange = attack(playerBChoice, playerAChoice);
      setScore([score[0] + playerAScoreChange, score[1] + playerBScoreChange]);
    }

    if (score[0] >= maxScore || score[1] >= maxScore) {
      gameStatus = "end";
    }
  };

  return {
    getMatchup: () => matchup,
    getScore: () => score,
    getMaxScore: () => maxScore,
    getMaxTurns: () => maxTurns,
    getGameStatus: () => gameStatus,
    playTurn,
    setScore,
    setMatchup,
    setMaxScore,
    setMaxTurns,
  };
};
