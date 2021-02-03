import { matchupMaker } from "./matchupMaker";
import { ScoreBoardHandler, scoreKeeper } from "./scoreKeeper";

describe("matchMaker", () => {
  let scoreBoardHandler: ScoreBoardHandler;
  const matchupHandler = matchupMaker(["Rock", "Paper", "Scissors"]);

  it("should create a new scoreboard for a Matchup", () => {
    scoreBoardHandler = scoreKeeper(matchupHandler.get());
    expect(scoreBoardHandler.getMatchup()).toEqual({
      Rock: {},
      Paper: {},
      Scissors: {},
    });
  });

  it("should set the Matchup", () => {
    const matchup = {
      Rock: {
        Attack: {
          Scissors: 1,
        },
        Defense: {
          Paper: 1,
        },
      },
      Paper: {
        Attack: {
          Rock: 3,
        },
      },
      Scissors: {
        Attack: {
          Paper: 1,
        },
      },
    };
    scoreBoardHandler.setMatchup(matchup);
    expect(scoreBoardHandler.getMatchup()).toEqual(matchup);
  });

  it("should update score for a player", () => {
    scoreBoardHandler.setScore([0, 1]);
    expect(scoreBoardHandler.getScore()).toEqual([0, 1]);
  });

  it("should play first turn", () => {
    scoreBoardHandler.playTurn("Rock", "Paper");
    expect(scoreBoardHandler.getScore()).toEqual([0, 3]);
  });

  it("should play second turn", () => {
    scoreBoardHandler.playTurn("Paper", "Rock");
    expect(scoreBoardHandler.getScore()).toEqual([2, 3]);
  });

  it("should set maximum number of turns", () => {
    scoreBoardHandler.setMaxTurns(4);
  });

  it("should set maximum score possible", () => {
    scoreBoardHandler.setMaxScore(5);
  });
});
