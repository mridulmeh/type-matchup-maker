import React from "react";
import './header.css'
import "../common.css"

export type HeaderProps = {
  header: React.ReactNode
};

export const Header: React.FC<HeaderProps> = (props) => {
  return <div className='header centered-display'>{props.header}</div>;
};
