import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MeasurementButton } from './MeasurementButton';

describe('MeasurementButton Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MeasurementButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<MeasurementButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // tslint:disable-next-line: no-empty
  describe('MeasurementButton Component Logic', () => {});
});
