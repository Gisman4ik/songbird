import React from 'react';
import './description.scss';

export default function Description ({blockData, lastSelectedOption, levelDone}) {
  if (lastSelectedOption === null) {
    return (
      <section className="description-block">
        <div>Послушайте плеер</div>
        <div>Выберите птицу из списка</div>
      </section>
    )
  }
  const birdName = blockData[lastSelectedOption - 1].name;
  const birdSpecies = blockData[lastSelectedOption - 1].species;
  const audioSrc = blockData[lastSelectedOption - 1].audio;
  const birdImg = blockData[lastSelectedOption - 1].image;
  const birdDescription = blockData[lastSelectedOption - 1].description;
  return (
    <section className="description-block">
      <div className="description-block__container">
        <img className="description-block__bird-img" src={birdImg}/>
        <ul className="description-block__list">
          <div className="description-block__bird-name">{birdName}</div>
          <div className="description-block__bird-species">{birdSpecies}</div>
          <audio className="description-block__player" src={audioSrc} controls></audio>
        </ul>
      </div>
  <div className="description-block__bird-description">{birdDescription}</div>
    </section>
  )
}
