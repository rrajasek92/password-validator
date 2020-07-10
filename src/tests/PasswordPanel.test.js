import React from 'react';
import { shallow } from 'enzyme';
import { PasswordPanel, PasswordBar, CheckBox, ConditionList } from '../components';

describe('PasswordPanel tests', () => {
  it('renders password bar', () => {
    const wrapper = shallow(<PasswordPanel />);
    const bar = wrapper.find(PasswordBar);
    expect(bar.exists()).toBe(true);
  })
  it('renders check box', () => {
    const wrapper = shallow(<PasswordPanel />);
    const checkbox = wrapper.find(CheckBox);
    expect(checkbox.exists()).toBe(true);
  })
  it('renders condition list', () => {
    const wrapper = shallow(<PasswordPanel />);
    const conditionList = wrapper.find(ConditionList);
    expect(conditionList.exists()).toBe(true);
  })
  it('renders password label', () => {
    const wrapper = shallow(<PasswordPanel />);
    const label = wrapper.find('.pLabel').text();
    expect(label).toEqual("Password");;
  })
})
