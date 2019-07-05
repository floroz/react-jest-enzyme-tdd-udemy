import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);

  if (state) wrapper.setState(state);
  return wrapper;
};

describe('', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders with success', () => {
    expect(wrapper).toBeTruthy();
  });
});
