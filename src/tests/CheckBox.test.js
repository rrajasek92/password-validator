import React from 'react';
import { shallow } from 'enzyme';
import { CheckBox } from '../components';

describe('CheckBox tests', () => {
  it('clicking should be unchecked initially', () => {
    const wrapper = shallow(<CheckBox />);
    const checkbox = wrapper.find('input');
    expect(checkbox.prop('value')).toEqual(false);
  })
  it('clicking should check box', () => {
    const wrapper = shallow(<CheckBox />);
    const checkbox = wrapper.find('input');
    checkbox.simulate('click');
    expect(checkbox.prop('value')).toEqual(false);
  })
  it('label renders', () => {
    const wrapper = shallow(<CheckBox label="Show"/>);
    const label = wrapper.find('label').text();
    expect(label).toEqual("Show");
  })
})
