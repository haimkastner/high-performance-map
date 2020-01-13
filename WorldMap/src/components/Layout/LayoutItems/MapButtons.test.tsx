import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MapButtons } from './MapButtons';

describe('MapButtons Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MapButtons />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<MapButtons />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // tslint:disable-next-line: no-empty
  describe('MapButtons Component Logic', () => {});
});
