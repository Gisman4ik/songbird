import React, { Component } from 'react';
import Header from './components/Header/Header';
import Questions from './components/Questions/Questions';
import GameContent from './components/GameContent/GameContent';
import GameOver from './components/GameOver/GameOver';
import NextLevelButton from './components/NextLevelButton/NextLevelButton';
import birdsData from './data/birdsData';


class App extends Component {
  state = {
    currentQuestionBlock: 0,
    currentRightOption: Math.floor(Math.random() * 6),
    currentBlockSelectedOptions: Array(6).fill(false),
    lastSelectedOption: null,
    score: 0,
    levelDone: false,
    gameDone: false,
  }

  audioCorrect = new Audio('https://zvukipro.com/uploads/files/2018-10/1540308963_jg-032316-sfx-elearning-correct-answer-sound-3.mp3');
  audioIncorrect = new Audio('https://zvukipro.com/uploads/files/2018-10/1540309251_jg-032316-sfx-feedback-incorrect-25.mp3');

  playSound = (isCorrect) => {
    this.audioIncorrect.load();
    this.audioCorrect.load();
    if (isCorrect) {
      this.audioCorrect.play();
    } else {
      this.audioIncorrect.play();
    }
  }

  onOptionClick = (optionId) => {
    this.setState((prevState) => {
      const isCorrect = optionId-1 === prevState.currentRightOption;
      const newLevelDone = prevState.levelDone ? true : isCorrect;
      const newCurrentBlockSelectedOptions = prevState.currentBlockSelectedOptions;
      if (!prevState.levelDone) {
        newCurrentBlockSelectedOptions[optionId-1] = true;
        this.playSound(isCorrect);
      }
      const newScore = isCorrect && !prevState.levelDone ?
        prevState.score + newCurrentBlockSelectedOptions.filter(item => !item).length : prevState.score;
      return {
        levelDone: newLevelDone,
        currentBlockSelectedOptions: newCurrentBlockSelectedOptions,
        lastSelectedOption: optionId,
        score: newScore,
      }
    })
  };

  onNextLvlBtnClick = () => {
    if (this.state.levelDone) {
      this.setState((prevState) => {
        const newCurrentQuestionBlock = prevState.currentQuestionBlock + 1;
        const newGameDone = newCurrentQuestionBlock === 6 ? true : false;
        return {
          levelDone: false,
          gameDone: newGameDone,
          currentQuestionBlock: newCurrentQuestionBlock,
          currentRightOption: Math.floor(Math.random() * 6),
          lastSelectedOption: null,
          currentBlockSelectedOptions: Array(6).fill(false),
        }
      })
    }
  }

  onRestartClick = () => {
    this.setState({
      currentQuestionBlock: 0,
      currentRightOption: Math.floor(Math.random() * 6),
      currentBlockSelectedOptions: Array(6).fill(false),
      lastSelectedOption: null,
      score: 0,
      levelDone: false,
      gameDone: false,
    });
  }

  render() {
    if (this.state.gameDone) {
      return (
        <>
          <Header
            questionBlocks={birdsData[6]}
            currentQuestionBlock={this.state.currentQuestionBlock}
            score={this.state.score}
          />
          <GameOver
            onRestartClick = {this.onRestartClick}
            score = {this.state.score}
          />
        </>
      )
    }

    return (
      <>
        <Header
          questionBlocks={birdsData[6]}
          currentQuestionBlock={this.state.currentQuestionBlock}
          score={this.state.score}
        />
        <Questions
          currentRightOption={this.state.currentRightOption}
          levelDone={this.state.levelDone}
          blockData={birdsData[this.state.currentQuestionBlock]}
        />
        <GameContent
          blockData = {birdsData[this.state.currentQuestionBlock]}
          onOptionClick = {this.onOptionClick}
          lastSelectedOption = {this.state.lastSelectedOption}
          currentBlockSelectedOptions = {this.state.currentBlockSelectedOptions}
          currentRightOption={this.state.currentRightOption}
          levelDone={this.state.levelDone}
        />
        <NextLevelButton
          onNextLvlBtnClick = {this.onNextLvlBtnClick}
          levelDone = {this.state.levelDone}
        />
      </>
    );
  }
}

export default App;
