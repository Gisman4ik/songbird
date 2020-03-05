import React from 'react';
import './nextLevelButton.scss';

export default function NextLevelButton ({onNextLvlBtnClick, levelDone}) {
  const btnStyle = levelDone ? "next-lvl-btn active" : "next-lvl-btn";
  return (
    <button className={btnStyle} onClick={onNextLvlBtnClick}>Next Level</button>
  )
}
