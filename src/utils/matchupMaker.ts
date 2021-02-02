import { create } from "domain";

export type Attack = {
  [key in string]: number;
};

export type Defense = {
  [key in string]: number;
};

export type SingleMatchup = {
  Attack?: Attack;
  Defense?: Defense;
};

export type Matchup = { [key in string]: SingleMatchup };

export type ChangeAttribute = (
  attackingType: string,
  defendingType: string,
  amount: number
) => void;

export type MatchupHandler = {
  remove: (type: string) => void;
  add: (type: string) => void;
  get: () => Matchup;
  increaseAttack: ChangeAttribute;
  decreaseAttack: ChangeAttribute;
  increaseDefense: ChangeAttribute;
  decreaseDefense: ChangeAttribute;
};

export type MatchupMaker = (types: string[]) => MatchupHandler;

const createMatchup = (types: string[]): Matchup => {
  const matchup: Matchup = {};
  types.forEach((type: string) => {
    matchup[type] = {};
  });
  return matchup;
};

/**
 * The matchup maker function acts as a singleton ensuring
 * the manipulation of the type matchups that exist within the
 * matchup.
 *
 * @return {*}
 */
export const matchupMaker: MatchupMaker = (types: string[]) => {
  const matchup = createMatchup(types);

  const removeType = (type: string): void => {
    delete matchup[type];
  };

  const addType = (type: string): void => {
    matchup[type] = {};
  };

  const changeAttribute = (
    types: string[],
    attribute: "Attack" | "Defense",
    amount: number
  ): void => {
    let chosenMatchupAttribute;
    const attackingType = matchup[types[0]];
    chosenMatchupAttribute = attackingType[attribute];

    if (!chosenMatchupAttribute) {
      chosenMatchupAttribute = chosenMatchupAttribute || { [types[1]]: 0 };
    }
    chosenMatchupAttribute[types[1]] += amount;
  };

  return {
    get: () => matchup,
    remove: removeType,
    add: addType,
    increaseAttack: (
      attackingType: string,
      defendingType: string,
      amount: number
    ) => changeAttribute([attackingType, defendingType], "Attack", amount),
    decreaseAttack: (
      attackingType: string,
      defendingType: string,
      amount: number
    ) => changeAttribute([attackingType, defendingType], "Attack", -amount),
    increaseDefense: (
      attackingType: string,
      defendingType: string,
      amount: number
    ) => changeAttribute([attackingType, defendingType], "Defense", amount),
    decreaseDefense: (
      attackingType: string,
      defendingType: string,
      amount: number
    ) => changeAttribute([attackingType, defendingType], "Defense", -amount),
  };
};
