import React from 'react';
import './questions.scss';

export default function Questions ({currentRightOption, levelDone, blockData}) {
  const birdPicture = levelDone ? 'question-block__bird-img' : 'question-block__bird-img unknown-bird';
  const birdName = levelDone ? blockData[currentRightOption].name : '******';
  const audioSrc = blockData[currentRightOption].audio;
  const birdImg = levelDone ? blockData[currentRightOption].image : 'https://www.ubackground.com/_ph/10/142949445.jpg';
  return (
    <section className="question-block">
      <img className={birdPicture} src={birdImg} alt="bird"/>
      <div className="question-block__container">
        <div className="question-block__bird-name">{birdName}</div>
        <audio className="question-block__player" src={audioSrc} controls></audio>
      </div>
    </section>
  )
}
