import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { DownBar } from './DownBar';

describe('DownBar Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DownBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<DownBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // tslint:disable-next-line: no-empty
  describe('DownBar Component Logic', () => {});
});
