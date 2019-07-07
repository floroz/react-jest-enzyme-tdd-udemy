import React, { Component } from 'react';
import GuessWords from './GuessWords';
import Congrats from './Congrats';
import { Input } from './Input';
import { connect } from 'react-redux';
import { getSecretWord } from './actions';

export class App extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

export default connect(
  state => ({
    guessedWords: state.guessedWords,
    success: state.success
  }),
  { getSecretWord }
)(App);
