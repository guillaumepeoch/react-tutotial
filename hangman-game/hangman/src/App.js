import React, { Component } from 'react';
import RandomWords from 'random-words'

import './App.css';

class App extends Component {
  constructor(){
    super();
    const wordString = RandomWords();
    const word = wordString.split("");
    const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
    'p','q','r','s','t','u','v','w','x','y','z'];
    alert(wordString);
    this.state = {
      word:word,
      inputWord:[],
      letters:letters
    }
  }

  keyPressed(letterPressed){
    //const letterInInputWord = this.state.inputWord.indexOf(letterPressed)>-1;
    const letterInWord = this.state.word.indexOf(letterPressed)>-1;
    const inputWord = this.state.inputWord;
    letterInWord ? inputWord.push(letterPressed) : console.log("No Match!!");
    this.setState({inputWord:inputWord});
  }

  render() {
    const { word, inputWord, letters } = this.state;
    return (
      <div className="App">
        <header>
          <h1>Hangman Game</h1>
        </header>
        <div className="word-to-guess">
          {word.map(( letter, index )=>(
            <div key={index} className="letter">
              { inputWord.indexOf(letter) > -1 && inputWord.length ? letter : "_" }
            </div>
          ))}
        </div>
        { letters.map(( letter, index )=>(
          <div key={index} className="keybord" onClick={()=>this.keyPressed(letter)}>{letter.toUpperCase()}</div>
        ))}
      </div>
    );
  }
}

export default App;
