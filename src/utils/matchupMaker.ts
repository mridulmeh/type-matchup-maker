import { create } from "domain";

export type Attack = {
  [key in string] : number
}

export type Defense = {
  [key in string] : number
}

export type SingleMatchup = {
  Attack?: Attack
  Defense?: Defense
}

/**
 * The matchup maker function acts as a singleton ensuring
 * the manipulation of the type matchups that exist within the
 * matchup.
 *
 * @return {*}
 */
export const matchupMaker = () => {
  const matchup: { [key in string]: SingleMatchup } = {};

  const createMatchup = (types: string[]) => {
    types.forEach((type: string) => {
      matchup[type] = {};
    });
  };

  return {
    create: createMatchup,
    remove: () => {},
    add: () => {},
    increaseAttack: () => {},
    decreaseAttack: () => {},
    increaseDefense: () => {},
    decreaseDefense: () => {},
  };
};
