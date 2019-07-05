import React from 'react';
import { shallow } from 'enzyme';
import Congrats from './Congrats';
import { findByTestAttr, checkProps } from '../test/testUtils';

const defaultProps = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

describe('Congrats component ', () => {
  it('should render without error', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
  });

  it('renders no text when `success` props is false', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, 'congrats-message');
    expect(component.length).toBe(0);
  });

  it('should render non-empty congrts message when `success` prop is true ', () => {
    const wrapper = setup({ success: true });
    const component = findByTestAttr(wrapper, 'congrats-message');

    expect(component.text().length).not.toBe(0);
  });

  it('does not throw warning with expected props', () => {
    const expectedProps = { success: false };

    checkProps(Congrats, expectedProps);
  });
});
