import React, { Component } from 'react';
import RandomWords from 'random-words'
import Keyboard from './Keyboard'
import Word from './Word'
import Panel from './Panel'

import './App.css';

class App extends Component {
  constructor(){
    super();
    let wordString = RandomWords();
    let word = wordString.split("");
    this.state = {
      word:word,
      inputLetters:[],
      inputCorrectLetters:[],
      victories:0
    }
  }

  reload = () => {
    let wordString = RandomWords();
    let word = wordString.split("");
    this.setState({
      word:word,
      inputLetters:[],
      inputCorrectLetters:[]
    });
  }

  keyPressed = (inputLetter) => {
    // Get all input letters and add the one which just got pressed
    const inputLetters = this.state.inputLetters;
    inputLetters.push(inputLetter);

    // If the letter is in the word add it to the inputCorrectLetter
    const letterInWord = this.state.word.indexOf(inputLetter)>-1;
    const inputCorrectLetters = this.state.inputCorrectLetters;
    letterInWord ? inputCorrectLetters.push(inputLetter) : console.log("No Match!!");

    // If all the letter of the word got discovered
    const wordLength = this.state.word.length;
    if(inputCorrectLetters.length === wordLength){
      alert("victory");
      let victories = this.state.victories;
      victories++
      this.setState({victories});
      this.reload();
    // If we still have more to discover
    } else {
      this.setState({
        inputLetters,
        inputCorrectLetters
      });
    }
  }

  render() {
    const { inputLetters, victories } = this.state;
    return (
      <div className="App">
        <header>
          <h1>Hangman Game</h1>
          <Panel
            victories={victories}
            score={inputLetters.length}
            onClick={this.reload}
          />
        </header>
        <Word
          word={this.state.word}
          inputLetters={this.state.inputLetters}
        />
        <Keyboard
          inputLetters={inputLetters}
          onClick={this.keyPressed}
        />
      </div>
    );
  }
}

export default App;
