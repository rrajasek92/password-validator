import React, {useState, useEffect} from 'react';
import {PasswordBar, CheckBox, Condition} from '../';
import {validatePassword} from '../../functions';

function ConditionList(props) {
  const [validations, setValidations] = useState({"8-72 Characters": false,"1 Lower Case Character":false,
                      "Should Not Match Your Email Address":true, "1 Uppercase Character":false, "1 Number":false});

  const conditions = props.conditions;
  useEffect(()=>{
    if(props.input!=null)setValidations(validatePassword(conditions,props.input));
  }, [props.input])

  const listConditions = () => {
    return conditions.map(function(x,i){
      return <li key={i}><Condition text={x} strike={validations[x]} /></li>
    })
  }

  return (
    <ul>
      {listConditions()}
    </ul>
  );
}

export default ConditionList;
