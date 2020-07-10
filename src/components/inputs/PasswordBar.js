import React, {useState, useEffect} from 'react';

function PasswordBar(props) {
  const [input, setInput] = useState(null);

  useEffect(() => {
    props.callback(input)
  }, [input])

  const handleChange = (e) => {
    setInput(e);
  }
  return(
      <input type={props.show?'text':'password'}
       name='password'
       id='password'
       value={input}
       onChange={(e) => handleChange(e.target.value)}
      />
    )
}

export default PasswordBar;
