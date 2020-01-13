import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MapButtonsMenu} from './MapButtonsMenu';

describe('MapButtonsMenu Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MapButtonsMenu />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<MapButtonsMenu />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // tslint:disable-next-line: no-empty
  describe('MapButtonsMenu Component Logic', () => {});
});
