import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { NavBarItem } from './NavBarItem';

describe('NavBarItem Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavBarItem name={'nav-bar-test'} value={4} width={3} height={3} />, div);

    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<NavBarItem name={'nav-bar-test'} value={4} width={3} height={3} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('NavBarItem Component Logic', () => {
    it('should render the correct name and value', () => {
      const name = 'Igal';
      const value = 78;

      const wrapper = shallow(<NavBarItem name={name} value={value} width={3} height={3} />);
      const nameP = wrapper.find('#name');
      const valueP = wrapper.find('#value');

      const nameText = nameP.text();
      const valueText = valueP.text();
      expect(nameText).toEqual(name);
      expect(valueText).toEqual(value.toString());
    });
  });
});
