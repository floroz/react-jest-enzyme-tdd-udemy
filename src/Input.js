import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from './actions/index';

export class Input extends Component {
  inputBox = React.createRef();

  state = {
    input: ''
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.guessWord(this.state.input);
  };

  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          type="text"
          data-test="input-box"
          className="mb-2 mx-sm-3"
          id="word-guess"
          placeholder="enter guess"
          ref={this.inputBox}
          onChange={e => this.setState({ input: e.target.value })}
        />
        <button
          data-test="submit-button"
          type="submit"
          className="btn btn-primary mb-2"
          onClick={this.onSubmit}
        >
          Submit
        </button>
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => ({ success });

const mapDispatchToProps = {
  guessWord
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
