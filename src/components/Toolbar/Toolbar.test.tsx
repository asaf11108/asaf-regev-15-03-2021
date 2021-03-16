import React from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './Toolbar';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Toolbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});