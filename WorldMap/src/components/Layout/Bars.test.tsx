import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Bars } from './Bars';

describe('Bar Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Bars />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<Bars />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // tslint:disable-next-line: no-empty
  describe('Bars Component Logic', () => {});
});
