import React from 'react';
import { shallow } from 'enzyme';
import { PasswordBar } from '../components';

// const expected1 = <input className="pass-bar" id="password" onChange={[Function onChange]} type="password" value={null} />

describe('Password bar tests', () => {
  it('input value should initially be null', () => {
    const wrapper = shallow(<PasswordBar />);
    const input = wrapper.find('input');
    const value = input.prop('value');
    expect(value).toEqual(null);
  })
  it('value should match be input', () => {
    const wrapper = shallow(<PasswordBar />);
    const input = wrapper.find('input');
    input.simulate('change', {target: {value: 'password1'}});
    // input.prop('onChange', { target: { value: "password1" } })
    const value = wrapper.find('input').prop('value');
    expect(value).toEqual("password1");
  })
  it('input should show value', () => {
    const wrapper = shallow(<PasswordBar show={true} />);
    const type = wrapper.find('input').prop('type');
    expect(type).toEqual('text');
  })
  it('input should not show value', () => {
    const wrapper = shallow(<PasswordBar show={false} />);
    const type = wrapper.find('input').prop('type');
    expect(type).toEqual('password');
  })
})
