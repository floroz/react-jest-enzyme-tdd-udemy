import React from 'react';
import { shallow } from 'enzyme';
import GuessWords from './GuessWords';
import { findByTestAttr, checkProps } from '../test/testUtils';

const defaultProps = {
  guessedWords: [
    {
      guessedWord: 'train',
      letterMatchCount: 3
    }
  ]
};
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessWords {...setupProps} />);
};

it('should not throw a warning with expected props', () => {
  checkProps(GuessWords, defaultProps);
});

describe('if there are no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  it('should render without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');

    expect(component.length).toBe(1);
  });

  it('should render instruction to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guessed-instructions');

    expect(instructions.length).toBe(0);
  });
});

describe('if there are words guessed', () => {
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 }
  ];

  let wrapper;
  beforeEach(() => {
    wrapper = setup(guessedWords);
  });

  it('renders without errors', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');

    expect(component.length).toBe(1);
  });

  it('should render "guessed word" section', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
    expect(guessedWordsNode.length).toBe(1);
  });

  it('should display the correct number of guessed words', () => {
    const wrapper = shallow(<GuessWords guessedWords={guessedWords} />);
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordsNode.length).toBe(guessedWords.length);
  });
});
