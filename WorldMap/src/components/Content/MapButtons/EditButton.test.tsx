import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { EditButton } from './EditButton';

describe('EditButton Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EditButton showMapButtonsMenu={true} speed={"123"} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<EditButton showMapButtonsMenu={true} speed={"123"}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // tslint:disable-next-line: no-empty
  describe('EditButton Component Logic', () => {});
});
