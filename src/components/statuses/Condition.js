import React from 'react';

function Condition(props) {
  const strike = {
    textDecoration:props.strike?"line-through":"none"
  };
  return(
      <li className="condition"><p style={strike}>{props.text}</p></li>
    )
}

export default Condition;
