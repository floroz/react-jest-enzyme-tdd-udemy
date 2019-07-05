import React, { Component } from 'react';
import GuessWords from './GuessWords';
import Congrats from './Congrats';
import { Input } from './Input';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <Input />
        <GuessWords
          guessedWords={[
            {
              guessedWord: 'train',
              letterMatchCount: 3
            }
          ]}
        />
      </div>
    );
  }
}

export default App;
