import React from 'react'

const Word = function(props){
  return (
    <div className="word-to-guess">
    {props.word.map(( letter, index )=>(
      <div key={index} className="letter">
        { props.inputLetters.indexOf(letter) > -1 && props.inputLetters.length ? letter : "_" }
      </div>
    ))}
    </div>
  )
}

export default Word;
