import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer';
import App from './App';

sessionStorage.setItem("user", "bill");

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
