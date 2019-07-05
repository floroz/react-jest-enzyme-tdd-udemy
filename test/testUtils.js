import checkPropTypes from 'check-prop-types';
import PropTypes from 'prop-types';
import rootReducer from '../src/reducers/index';
import { createStore } from 'redux';

export const storeFactory = initialState => {
  return createStore(rootReducer, initialState);
};

export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );

  expect(propError).toBeUndefined();
};
