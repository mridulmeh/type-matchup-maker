import rock from "../images/rock.jpg";
import paper from "../images/paper.png";
import scissors from "../images/scissors.jpg";
import React from "react";
import './resources.css'

export const ResourceMap: { [key in string]: React.FC } = {
  Rock: () => <img className='image' src={rock} alt="Rock" />,
  Paper: () => <img className='image' src={paper} alt="Paper" />,
  Scissors: () => <img className='image' src={scissors} alt="Scissors" />,
};
