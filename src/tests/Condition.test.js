import React from 'react';
import { shallow } from 'enzyme';
import { Condition } from '../components';

describe('Condition tests', () => {
  it('Condition text renders', () => {
    const wrapper = shallow(<Condition text="Condition1"/>);
    const text = wrapper.find('p').text();
    expect(text).toEqual("Condition1");
  })
  it('Condition has strikethrough', () => {
    const wrapper = shallow(<Condition text="Condition1" strike={true} />);
    const style = wrapper.find('p').prop('style');
    expect(style).toHaveProperty('textDecoration', 'line-through');
  })
  it('Condition does not have strikethrough', () => {
    const wrapper = shallow(<Condition text="Condition1" strike={false} />);
    const style = wrapper.find('p').prop('style');
    expect(style).toHaveProperty('textDecoration', 'none');
  })
})
