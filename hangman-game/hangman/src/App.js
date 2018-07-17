import React, { Component } from 'react';
import RandomWords from 'random-words'

import './App.css';

class App extends Component {
  constructor(){
    super();
    let wordString = RandomWords();
    let word = wordString.split("");
    const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
    'p','q','r','s','t','u','v','w','x','y','z'];
    this.state = {
      word:word,
      inputLetters:[],
      inputCorrectLetters:[],
      letters:letters,
      victories:0
    }
    alert(word);
  }

  reload () {
    let wordString = RandomWords();
    let word = wordString.split("");
    this.setState({
      word:word,
      inputLetters:[],
      inputCorrectLetters:[]
    });
  }

  keyPressed(letterPressed){
    const inputLetters = this.state.inputLetters;
    inputLetters.push(letterPressed);

    const letterInWord = this.state.word.indexOf(letterPressed)>-1;
    const inputCorrectLetters = this.state.inputCorrectLetters;
    letterInWord ? inputCorrectLetters.push(letterPressed) : console.log("No Match!!");

    if(inputCorrectLetters.length === this.state.word.length){
      alert("victory");
      let victory = this.state.victories;
      victory++
      this.setState({victories:victory});
      this.reload();
    } else {
      this.setState({
        inputLetters:inputLetters,
        inputCorrectLetters:inputCorrectLetters
      });
    }
  }

  render() {
    const { word, inputLetters, letters, victories } = this.state;
    return (
      <div className="App">
        <header>
          <h1>Hangman Game</h1>
          <div className="panel">
            <div className="victories">Victories: {victories}</div>
            <div className="score">Score: {inputLetters.length}</div>
            Refresh: <span className="reload" onClick={()=>this.reload()}>&#x21bb;</span>
          </div>
        </header>
        <div className="word-to-guess">
          {word.map(( letter, index )=>(
            <div key={index} className="letter">
              { inputLetters.indexOf(letter) > -1 && inputLetters.length ? letter : "_" }
            </div>
          ))}
        </div>
        { letters.map(( letter, index )=>(
          inputLetters.indexOf(letter) > -1 ? <div key={index} className="keybord-pressed">{letter.toUpperCase()}</div> : <div key={index} className="keybord" onClick={()=>this.keyPressed(letter)}>{letter.toUpperCase()}</div>
        ))}
      </div>
    );
  }
}

export default App;
