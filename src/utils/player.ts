export type Player = {
  name: string;
  index: 0 | 1;
  type: "computer" | "user";
};

export type PlayerHandler = {
  get: () => Player;
};

export const playerMaker = (
  index: 0 | 1,
  name: string,
  type: "computer" | "user" = "user"
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
