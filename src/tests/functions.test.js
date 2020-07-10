import React from 'react';
import { validatePassword } from '../functions'

let conditions = ["8-72 Characters","1 Lower Case Character",
                    "Should Not Match Your Email Address", "1 Uppercase Character", "1 Number"];
sessionStorage.setItem("user", "bill");

describe('Helper Functions', () => {
  it('validate password 1', () =>{
    let expected = {"8-72 Characters": true,"1 Lower Case Character":true,
                        "Should Not Match Your Email Address":true, "1 Uppercase Character":false, "1 Number":true}
    let input = "password1"
    expect(validatePassword(conditions, input)).toEqual(expected);
  })
  it('validate password 2', () =>{
    let expected = {"8-72 Characters": true,"1 Lower Case Character":true,
                        "Should Not Match Your Email Address":true, "1 Uppercase Character":true, "1 Number":false}
    let input = "Password"
    expect(validatePassword(conditions, input)).toEqual(expected);
  })
  it('validate password 3', () =>{
    let expected = {"8-72 Characters": false,"1 Lower Case Character":false,
                        "Should Not Match Your Email Address":false, "1 Uppercase Character":true, "1 Number":false}
    let input = "PBILL"
    expect(validatePassword(conditions, input)).toEqual(expected);
  })
})
