import React from "react";
import './header.css'

export type HeaderProps = {
  header: React.ReactNode
};

export const Header: React.FC<HeaderProps> = (props) => {
  return <div className='header'>{props.header}</div>;
};
