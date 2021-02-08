
export type PlayerType = "computer" | "user";

export type Player = {
  name: string;
  index: 0 | 1;
  type: PlayerType;
};

export type PlayerHandler = {
  get: () => Player;
  setName: (value: string) => void;
  setType: (value: PlayerType) => void;
};

export const playerMap: { [key in string]: string } = {
  user: "Player",
  computer: "Computer",
};

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

  const setName = (value: string) => {
    player.name = value;
  };

  const setType = (value: PlayerType) => {
    player.type = value;
  };

  return {
    get: () => player,
    setName,
    setType,
  };
};
