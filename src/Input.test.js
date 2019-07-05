import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  console.log(wrapper.debug());
};

setup();

describe('render', () => {
  describe('word has not been guessed', () => {
    it('renders component without error', () => {});
    it('renders input box', () => {});
    it('renders submit button', () => {});
  });
  describe('word has been guessed', () => {
    it('renders component without error', () => {});
    it('does not render input box', () => {});
    it('does not render submit button', () => {});
  });
});

describe('Input component state', () => {
  it('', () => {});
});
