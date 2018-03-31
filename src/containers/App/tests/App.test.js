import React from 'react';
import { shallow } from 'enzyme';
import App from '..';

describe('<App />', () => {
  it('should render Facts', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.text()).toBe('Facts.');
  });
})
