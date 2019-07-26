import React, { Component, PropTypes } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      editText: this.props.data.text
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
  }

  handleEdit() {
    this.setState({ editing: true });
  }

  handleSubmit() {
    const val = this.state.editText.trim();

    if (val) {
      this.setState({ editing: false, editText: val });
      this.props.editTodo(this.props.data.id, val);
    } else {
      this.props.deleteTodo(this.props.data.id);
    }
  }

  handleToggle() {
    this.props.completeTodo(this.props.data.id);
  }

  handleDestroy() {
    this.props.deleteTodo(this.props.data.id);
  }

  handleKeyDown(event) {
    if (event.which === 27) {
      this.setState({ editing: false, editText: this.props.data.text });
    } else if (event.which === 13) {
      this.handleSubmit();
    }
  }

  handleChange(event) {
    this.setState({ editText: event.target.value });
  }

  render() {
    let className = '';
    if (this.props.data.completed) { className += ' completed'; }
    if (this.state.editing) { className += ' editing'; }

    return (
      <li className={className}>
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            checked={this.props.data.completed}
            onChange={this.handleToggle}
          />
          <label htmlFor="toggle" onDoubleClick={this.handleEdit}>{this.props.data.text}</label>
          <button className="destroy" onClick={this.handleDestroy} />
        </div>
        <input
          type="text"
          className="edit"
          value={this.state.editText}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </li>
    );
  }
}

TodoItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    created_at: PropTypes.object.isRequired
  }).isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired
};

export default TodoItem;
