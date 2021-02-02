import { matchupMaker } from "./matchupMaker";

describe("matchMaker", () => {
  it("should create a matchup with given types", () => {
    const matchup = matchupMaker.create(["Rock", "Paper", "Pencil"]);
  });

  it("should remove a type from the matchup", () => {
    matchupMaker.remove("Pencil");
  });

  it("should add a type to the matchup", () => {
    matchupMaker.add("Scissors");
  });

  it("should increase attack for one type against another", () => {
    matchupMaker.increaseAttack("Paper", "Rock", 2);
  });
  it("should decrease attack for one type against another", () => {
    matchupMaker.decreaseAttack("Paper", "Rock", 2);
  });

  it("should increase defense for one type against another", () => {
    matchupMaker.increaseDefense("Paper", "Rock", 2);
  });
  it("should decrease defense for one type against another", () => {
    matchupMaker.decreaseDefense("Paper", "Rock", 0);
  });
});
