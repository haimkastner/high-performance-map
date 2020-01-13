import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { ShipButton } from './ShipButton';

describe('ShipButton Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ShipButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<ShipButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // tslint:disable-next-line: no-empty
  describe('ShipButton Component Logic', () => {});
});
