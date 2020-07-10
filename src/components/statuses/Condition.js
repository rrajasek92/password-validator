import React, {useState, useEffect} from 'react';

function Condition(props) {
  const strike = {
    textDecoration:props.strike?"line-through":"none"
  };
  return(
      <p style={strike}>{props.text}</p>
    )
}

export default Condition;
