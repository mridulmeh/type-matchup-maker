import { matchupFinder } from "./matchupFinder";

it("finds matchups", () => {
  expect(matchupFinder(1, 2)).toEqual(3);
});
