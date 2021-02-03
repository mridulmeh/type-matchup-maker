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
  firstType: string,
  secondType: string,
  amount: number
) => void;

export type MatchupHandler = {
  remove: (type: string) => void;
  add: (type: string) => void;
  getChoices: () => string[];
  get: () => Matchup;
  update: (matchup: Matchup) => void;
  increaseAttack: ChangeAttribute;
  decreaseAttack: ChangeAttribute;
  increaseDefense: ChangeAttribute;
  decreaseDefense: ChangeAttribute;
};

export type MatchupMaker = (types: string[]) => MatchupHandler;

/**
 * Creates matchup based on the new types provided
 *
 * @param {string[]} types
 * @return {*}  {Matchup}
 */
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
 * format for the matchup for Rock, Paper and Scissors:
 * {
 *  Rock: {
 *    Attack : {
 *      Scissors: 1
 *    }
 *  },
 * Paper: {
 *    Attack : {
 *      Rock: 1
 *    }
 *  },
 * Scissors: {
 *    Attack : {
 *      Paper: 1
 *    }
 *  }
 * }
 *
 * @return {*}
 */
export const matchupMaker: MatchupMaker = (types: string[]) => {
  let matchup: Matchup = createMatchup(types);

  const removeType = (type: string): void => {
    delete matchup[type];
  };

  const addType = (type: string): void => {
    matchup[type] = {};
  };

  const updateMatchup = (newMatchup: Matchup) => {
    matchup = newMatchup;
  };

  // Changes the value by the desired amount for attack/defense between two types
  const changeAttribute = (
    types: string[],
    attribute: "Attack" | "Defense",
    amount: number
  ): void => {
    let chosenMatchupAttribute;

    // Get the type that is attacking/defending
    const attackingType = matchup[types[0]];

    // Get the attack/defense set for that type
    chosenMatchupAttribute = attackingType[attribute];

    if (!chosenMatchupAttribute) {
      chosenMatchupAttribute = chosenMatchupAttribute || { [types[1]]: 0 };
    }

    // Change the stat against the type that is attacking / being attacked
    chosenMatchupAttribute[types[1]] += amount;
    matchup[types[0]][attribute] = chosenMatchupAttribute;
  };

  return {
    get: () => matchup,
    getChoices: () => Object.keys(matchup),
    remove: removeType,
    add: addType,
    update: updateMatchup,
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
      defendingType: string,
      attackingType: string,
      amount: number
    ) => changeAttribute([defendingType, attackingType], "Defense", amount),
    decreaseDefense: (
      defendingType: string,
      attackingType: string,
      amount: number
    ) => changeAttribute([defendingType, attackingType], "Defense", -amount),
  };
};
