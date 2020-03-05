import React from 'react';
import './gameOver.scss';
import RestartButton from './RestartButton/RestartButton';

export default function GameOver ({onRestartClick, score}) {
  return (
    <section className="gameover">
      <h1 className="congratulations">Поздравляем</h1>
      <h2 className="display-score">Вы прошли викторину и набрали <strong>{score}</strong> из <strong>30</strong> возможных баллов</h2>
      <RestartButton
        onRestartClick = {onRestartClick}
      />
    </section>
  )
}
