import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { SideMenu} from './SideMenu';

describe('SideMenu Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SideMenu />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<SideMenu />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // tslint:disable-next-line: no-empty
  describe('SideMenu Component Logic', () => {});
});
