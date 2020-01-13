import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MoveButton } from './MoveButton';

describe('MoveButton Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MoveButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<MoveButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // tslint:disable-next-line: no-empty
  describe('MoveButton Component Logic', () => {});
});
