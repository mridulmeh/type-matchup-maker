import { Matchup, MatchupHandler, matchupMaker } from "./matchupMaker";

describe("matchMaker", () => {
  let matchup: MatchupHandler

  it("should create a matchup with given types", () => {
    matchup = matchupMaker(["Rock", "Paper", "Pencil"]);
    expect(matchup.get()).toEqual({
      Rock: {},
      Paper: {},
      Pencil: {},
    });
  });

  it("should remove a type from the matchup", () => {
    matchup.remove("Pencil");
    expect(matchup.get()).toEqual({
      Rock: {},
      Paper: {},
    });
  });

  it("should add a type to the matchup", () => {
    matchup.add("Scissors");
    expect(matchup.get()).toEqual({
      Rock: {},
      Paper: {},
      Scissors: {},
    });
  });

  it("should increase attack for one type against another", () => {
    matchup.increaseAttack("Paper", "Rock", 4);
    expect(matchup.get()).toEqual({
      Rock: {},
      Paper: {
        Attack: {
          Rock: 4,
        },
      },
      Scissors: {},
    });
  });
  
  it("should decrease attack for one type against another", () => {
    matchup.decreaseAttack("Paper", "Rock", 3);
    expect(matchup.get()).toEqual({
      Rock: {},
      Paper: {
        Attack: {
          Rock: 1,
        },
      },
      Scissors: {},
    });
  });

  it("should increase defense for one type when attacked by another", () => {
    matchup.increaseDefense("Paper", "Rock", 2);
    expect(matchup.get()).toEqual({
      Rock: {},
      Paper: {
        Attack: {
          Rock: 1,
        },
        Defense: {
          Rock: 2,
        },
      },
      Scissors: {},
    });
  });

  it("should decrease defense for one type against another", () => {
    matchup.decreaseDefense("Paper", "Rock", 0);
    expect(matchup.get()).toEqual({
      Rock: {},
      Paper: {
        Attack: {
          Rock: 1,
        },
        Defense: {
          Rock: 0,
        },
      },
      Scissors: {},
    });
  });
});
