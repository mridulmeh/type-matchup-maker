export type PlayerType = "computer" | "user";

export type Player = {
  name: string;
  index: 0 | 1;
  type: PlayerType
};

export type PlayerHandler = {
  get: () => Player;
};

export const playerMap: {[key in string]: string} = {
  user: 'Player',
  computer: 'Computer'
}

export const playerMaker = (
  index: 0 | 1,
  name: string,
  type: PlayerType = "user"
): PlayerHandler => {
  const player: Player = {
    name,
    index,
    type,
  };

  return {
    get: () => player,
  };
};
