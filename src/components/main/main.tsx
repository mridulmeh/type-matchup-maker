
import React from 'react';
import { matchupFinder } from '../../utils/matchupFinder';

export const TypeMatchupMaker = () => {
  return <div>{matchupFinder(1, 2)}</div>;
};
