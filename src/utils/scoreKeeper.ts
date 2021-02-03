import { Matchup } from "./matchupMaker";

export type ScoreBoardHandler = {
  getMatchup: () => Matchup;
  getScore: () => number[];
  getMaxScore: () => number;
  getMaxTurns: () => number;
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
    const attackStat = matchup[choiceA].Attack?.[choiceB] ?? 0;
    const defenseStat = matchup[choiceB].Defense?.[choiceA] ?? 0;

    return Math.max(0, attackStat - defenseStat);
  };

  const playTurn = (playerAChoice: string, playerBChoice: string) => {
    const playerAScoreChange = attack(playerAChoice, playerBChoice);
    const playerBScoreChange = attack(playerBChoice, playerAChoice);
    setScore([score[0] + playerAScoreChange, score[1] + playerBScoreChange]);
  };

  return {
    getMatchup: () => matchup,
    getScore: () => score,
    getMaxScore: () => maxScore,
    getMaxTurns: () => maxTurns,
    playTurn,
    setScore,
    setMatchup,
    setMaxScore,
    setMaxTurns,
  };
};
