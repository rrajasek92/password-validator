import React, {useState, useEffect} from 'react';
import {Condition} from '../';
import {validatePassword} from '../../functions';
import './statuses.css'
function ConditionList(props) {
  const [validations, setValidations] = useState({"8-72 Characters": false,"1 Lower Case Character":false,
                      "Should Not Match Your Email Address":true, "1 Uppercase Character":false, "1 Number":false});

  const conditions = props.conditions;
  useEffect(()=>{
    if(props.input!=null)setValidations(validatePassword(conditions,props.input));
  }, [props.input])

  const listConditions = () => {
    return conditions.map(function(x,i){
      return <Condition text={x} strike={validations[x]} />
    })
  }

  return (
    <ul className="conditionList">
      {listConditions()}
    </ul>
  );
}

export default ConditionList;
