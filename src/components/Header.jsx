import React, { Component, PropTypes } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.props.addTodo(e.target.value);
      this.setState({ text: '' });
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <header>
        <h1>todo</h1>
        <input
          type="text"
          className="new-todo"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          placeholder="What needs to be done?"
          value={this.state.text}
          autoFocus
        />
      </header>
    );
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Header;
