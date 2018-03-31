import React from 'react';
import { shallow } from 'enzyme';
import App from '..';

test('should render without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
