import React from 'react';

const Keyboard = ( props ) => {
  const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
  'p','q','r','s','t','u','v','w','x','y','z'];

  const keyboard = letters.map((letter, index)=>{
      let nameClass = props.inputLetters.indexOf(letter) > -1 ? "keybord-pressed" : "keybord"
      return (<div className={nameClass} key={index} onClick={()=>props.onClick(letter)}> {letter.toUpperCase()} </div>)
    });

  return (keyboard);
}

export default Keyboard;
