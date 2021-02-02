import { match } from "assert";
import { MatchupHandler, matchupMaker } from "./matchupMaker";
import { scoreKeeper } from "./scoreKeepter";

describe("matchMaker", () => {
  let scoreBoardHandler;
  const matchupHandler = matchupMaker(["Rock", "Paper", "Scissors"]);
  matchupHandler.update({
    Rock: {
      Attack: {
        Scissors: 1,
      },
    },
    Paper: {
      Attack: {
        Rock: 1,
      },
    },
    Scissors: {
      Attack: {
        Paper: 1,
      },
    },
  });

  it("should create a new scoreboard for a Matchup", () => {
    scoreBoardHandler = scoreKeeper(matchupHandler.get());
    expect(scoreBoardHandler.get()).toEqual();
  });

  it("should update scoreboard for a player", () => {
    scoreBoardHandler = scoreBoardHandler.update(0, 2);
  });

  it("should play first player's attacking turn", () => {
    scoreBoardHandler = scoreBoardHandler.attack(0, "Rock");
    scoreBoardHandler = scoreBoardHandler.defend(1, "Paper");
  });
  it("should play second player's attacking turn", () => {
    scoreBoardHandler = scoreBoardHandler.attack(0, "Paper");
    scoreBoardHandler = scoreBoardHandler.defend(1, "Rock");
  });

  it("should set maximum number of turns", () => {
    scoreBoardHandler = scoreBoardHandler.setMaxTurns(4);
  });

  it("should set maximum score possible", () => {
    scoreBoardHandler = setMaxScore(5);
  });
});
