import React from 'react'

const Panel = function(props){
  return (
    <div className="panel">
      <div className="victories">Victories: {props.victories}</div>
      <div className="score">Score: {props.score}</div>
      Refresh: <span className="reload" onClick={props.onClick}>&#x21bb;</span>
    </div>
  )
}

export default Panel;
