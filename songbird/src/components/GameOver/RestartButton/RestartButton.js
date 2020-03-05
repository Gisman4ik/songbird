import React from 'react';
import './restartButton.scss';

export default function RestartButton ({onRestartClick}) {
  return (
    <button className="restart-btn" onClick={onRestartClick}>Попробовать ещё раз!</button>
  )
}
