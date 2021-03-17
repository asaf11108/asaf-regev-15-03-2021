import React from 'react';
import ReactDOM from 'react-dom';
import ToolbarMenuItems from './ToolbarMenuItems';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ToolbarMenuItems />, div);
  ReactDOM.unmountComponentAtNode(div);
});