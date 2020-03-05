import React from 'react';
import './gameContent.scss';
import OptionsList from './Options/Options';
import Description from './Description/Description';

export default function GameContent ({blockData,onOptionClick,lastSelectedOption,currentBlockSelectedOptions,currentRightOption,levelDone}) {
  return (
    <section className="game-content">
      <OptionsList
        className = "game-content__options-list"
        blockData = {blockData}
        onOptionClick = {onOptionClick}
        currentBlockSelectedOptions = {currentBlockSelectedOptions}
        currentRightOption = {currentRightOption}
        levelDone = {levelDone}
      />
      <Description
        blockData = {blockData}
        lastSelectedOption = {lastSelectedOption}
      />
    </section>
  )
}
