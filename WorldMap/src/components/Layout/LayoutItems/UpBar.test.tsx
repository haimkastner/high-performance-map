import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { UpBar } from './UpBar';

describe('UpBar Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UpBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<UpBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // tslint:disable-next-line: no-empty
  describe('UpBar Component Logic', () => {});
});
