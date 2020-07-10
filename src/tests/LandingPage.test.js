import React from 'react';
import { shallow } from 'enzyme';
import { LandingPage, PasswordPanel } from '../components';

describe('Landing Page tests', () => {
  it('renders panel', () => {
    const wrapper = shallow(<LandingPage />);
    const panel = wrapper.find(PasswordPanel);
    expect(panel.exists()).toBe(true);
  })
})
