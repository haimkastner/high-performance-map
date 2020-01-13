import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { LayoutItem } from './LayoutItem';
import color from '@material-ui/core/colors/yellow';
import { shallow } from 'enzyme';
import { Container } from '@material-ui/core';

describe('LayoutItem Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LayoutItem children={<div id="test"/>} opacity={1} color={"blue"} width={"3"} height={"3"}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<LayoutItem children={<div id="test"/>} opacity={1} color={"blue"} width={"3"} height={"3"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // tslint:disable-next-line: no-empty
  describe('LayoutItem Component Logic', () => {
      const childC = <div id="tester"/>;
      const opacityC = 1;
      const colorC = "blue";
      const widthC = "3";
      const heightC = "3";

      const wrapper = shallow(<LayoutItem children={childC} opacity={opacityC} color={colorC} width={widthC} height={heightC} />);
      const content = wrapper.find('#content-box');
      const container = wrapper.find('#container');
      const background = wrapper.find('#background');

      expect(content.contains(childC)).toEqual(true);
      expect(background.props().style?.opacity).toEqual(opacityC);
      expect(background.props().style?.backgroundColor).toEqual(colorC);
      expect(container.props().style?.width).toEqual(widthC);
      expect(container.props().style?.height).toEqual(heightC);

  });
});
