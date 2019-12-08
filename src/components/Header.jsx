import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleKeyDown(e) {
    const { addTodo } = this.props;

    if (e.keyCode === 13) {
      e.preventDefault();
      addTodo(e.target.value);
      this.setState({ text: '' });
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    const { text } = this.state;

    return (
      <header>
        <h1>todos</h1>
        <input
          type="text"
          className="new-todo"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          placeholder="What needs to be done?"
          value={text}
        />
      </header>
    );
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Header;
