import React from 'react';
import './options.scss';

export default function OptionsList ({blockData,onOptionClick,currentBlockSelectedOptions, currentRightOption,levelDone}) {
  const optionsList = blockData.map(bird =>
    <Option
      name = {bird.name}
      onOptionClick = {onOptionClick}
      id = {bird.id}
      isSelected = {currentBlockSelectedOptions[bird.id - 1]}
      currentRightOption = {currentRightOption}
      levelDone = {levelDone}
      key = {bird.id}
    />
  );
  return (
    <ul className="options-list">
      {optionsList}
    </ul>
  )
}

function Option ({name,id,onOptionClick, isSelected, currentRightOption, levelDone}) {
  const btnStyle = isSelected && id-1 === currentRightOption ? 'options-list__option_btn correct' :
                  isSelected ? 'options-list__option_btn incorrect' : 'options-list__option_btn';

  return (
    <li className="options-list__option" onClick={() => onOptionClick(id)}>
      <button className={btnStyle}></button>
      {name}
    </li>
  )
}

