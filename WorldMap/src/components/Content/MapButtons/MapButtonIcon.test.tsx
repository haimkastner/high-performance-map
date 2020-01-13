import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MapButtonIcon } from './MapButtonIcon';

describe('MapButtonIcon Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MapButtonIcon imageName={"side-menu-shape-copy-2@2x.png"} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<MapButtonIcon imageName={"side-menu-shape-copy-2@2x.png"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // tslint:disable-next-line: no-empty
  describe('MapButtonIcon Component Logic', () => {});
});
