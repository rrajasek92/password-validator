import React, {useState, useEffect} from 'react';
import {PasswordBar, CheckBox, ConditionList} from '../';
import {validatePassword} from '../../functions';
import './panels.css'

function PasswordPanel(props) {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");
  const conditions = ["8-72 Characters","1 Lower Case Character",
                      "Should Not Match Your Email Address", "1 Uppercase Character", "1 Number"]
  return (
    <div className="panel">
      <div>
        <p>Password</p>
        <PasswordBar show={show} callback={setInput}/>
        <CheckBox label="Show" callback={setShow} />
      </div>
      <div style={{flexWrap: "wrap", width:"50%", height:"10rem"}}>
      <ConditionList input={input} conditions={conditions}/>
      </div>
    </div>
  );
}

export default PasswordPanel;
