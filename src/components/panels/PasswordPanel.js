import React, { useState } from 'react';
import { PasswordBar, CheckBox, ConditionList } from '../';
import './panels.css'

function PasswordPanel(props) {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");
  const conditions = ["8-72 Characters","1 Lower Case Character",
                      "Should Not Match Your Email Address", "1 Uppercase Character", "1 Number"]
  return (
    <div className="panel">
      <span className="pLabel">Password</span>
      <div className="password">
        <PasswordBar show={show} callback={setInput}/>
        <CheckBox label="Show" callback={setShow} />
      </div>
      <div className="conditions">
      <ConditionList input={input} conditions={conditions}/>
      </div>
    </div>
  );
}

export default PasswordPanel;
