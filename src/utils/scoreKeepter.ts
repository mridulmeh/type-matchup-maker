import { Matchup } from "./matchupMaker";

/**
 * The objective of score is to have a turn with attack and defense:
 *
 * @param {Matchup} matchup
 */
export const scoreKeeper = (matchupInput: Matchup) => {
  let matchup: Matchup = matchupInput;
  let maxTurns = Number.POSITIVE_INFINITY;
  let maxScore = Number.POSITIVE_INFINITY;
  let score = [0, 0]; // 2 players constant for now

  const setMaxTurns = (turns) => {
    maxTurns = turns;
  };

  const setMaxScore = (newMaxScore) => {
    maxScore = newMaxScore;
  };

  const setScore = (newScore) => {
    score = newScore;
  };

  const setMatchup = (newMatchup: Matchup) => {
    matchup = newMatchup;
  };

  const attack = (choiceA, choiceB) => {
    const attackStat = matchup[choiceA].Attack?.[choiceB] ?? 0;
    console.log(attackStat)
    const defenseStat = matchup[choiceB].Defense?.[choiceA] ?? 0;

    return Math.max(0, attackStat - defenseStat);
  };

  const playTurn = (playerAChoice, playerBChoice) => {
    const playerAScoreChange = attack(playerAChoice, playerBChoice);
    console.log(playerAScoreChange)
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
