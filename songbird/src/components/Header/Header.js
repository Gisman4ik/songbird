import React from 'react';
import './header.scss';

export default function Header ({questionBlocks, currentQuestionBlock, score}) {
  const questionElements = questionBlocks.map((item, i) => (
    <li
      className={
        currentQuestionBlock === i
          ? "question-block-list__question-block question-block-list__question-block_selected"
          : "question-block-list__question-block"
      }
      key={item.id}
    >
      <span>{item.name}</span>
    </li>
  ));
  return (
    <header className="header">
      <div className="header__logo"></div>
      <span className="header__score">{`Score: ${score}`}</span>
      <ul className="question-block-list">{questionElements}</ul>
    </header>
  )
}
