import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { ZoomInButton } from './ZoomInButton';

describe('ZoomInButton Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ZoomInButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<ZoomInButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // tslint:disable-next-line: no-empty
  describe('ZoomInButton Component Logic', () => {});
});
