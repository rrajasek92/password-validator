import React, {useState, useEffect} from 'react';
import './inputs.css'

function PasswordBar(props) {
  const [input, setInput] = useState(null);

  useEffect(() => {
    props.callback(input)
  }, [input])

  const handleChange = (e) => {
    setInput(e);
  }
  return(
      <input id="password" type={props.show?'text':'password'}
         className="pass-bar"
         value={input}
         onChange={(e) => handleChange(e.target.value)}
      />
    )
}

export default PasswordBar;
