import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { NavBar } from './NavBar';

describe('NavBar Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<NavBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // tslint:disable-next-line: no-empty
  describe('NavBar Component Logic', () => {});
});
