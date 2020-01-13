import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { ZoomOutButton } from './ZoomOutButton';

describe('ZoomOutButton Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ZoomOutButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<ZoomOutButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // tslint:disable-next-line: no-empty
  describe('ZoomOutButton Component Logic', () => {});
});
