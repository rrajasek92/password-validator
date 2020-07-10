import React from 'react';
import { shallow } from 'enzyme';
import { ConditionList } from '../components';

const conditions = ["8-72 Characters","1 Lower Case Character",
                    "Should Not Match Your Email Address", "1 Uppercase Character", "1 Number"]

describe('Condition List tests', () => {
  it('Condition text renders', () => {
    const wrapper = shallow(<ConditionList conditions={conditions}/>);
    const list = wrapper.find('ul');
    expect(list.children()).toHaveLength(5);
  })
})
