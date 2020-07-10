import React, { useState, useEffect } from 'react';

function CheckBox(props) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    props.callback(value)
  }, [value])

  const handleChange = (e) => {
    setValue(e);
  }
  return(
    <>
      <input
        type="checkbox"
        value={value}
        onChange={(e) => handleChange(e.target.checked)}/>
      <label>{props.label}</label>
    </>
    )
}

export default CheckBox;
