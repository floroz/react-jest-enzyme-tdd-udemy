import React from 'react';
import ConnectedApp, { App } from './App';
import { shallow } from 'enzyme';
import { storeFactory } from '../test/testUtils';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<ConnectedApp store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('App Component', () => {
  it('should render guessedWords as a prop', () => {
    const guessedWords = [
      {
        guessedWord: 'train',
        letterMatchCount: 3
      }
    ];

    const wrapper = setup({ guessedWords });
    const guessProps = wrapper.instance().props.guessedWords;

    expect(guessProps).toEqual(guessedWords);
  });

  it('should render success as a prop', () => {
    const success = true;

    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;

    expect(successProp).toBe(success);
  });

  it('should have getSecretWord action creator as prop', () => {
    const wrapper = setup();
    const getSecret = wrapper.instance().props.getSecretWord;
    expect(getSecret).toBeInstanceOf(Function);
  });
});

describe('App not connected to Redux', () => {
  describe('getSecretWord ', () => {
    it('should run on App mount', () => {
      const getSecretWordMock = jest.fn();

      const props = {
        getSecretWord: getSecretWordMock,
        success: false,
        guessedWords: []
      };

      const wrapper = shallow(<App {...props} />);

      wrapper.instance().componentDidMount();

      const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

      expect(getSecretWordCallCount).toBe(1);
    });
  });
});
