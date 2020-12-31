import { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    const { data } = this.props;

    this.state = {
      editing: false,
      editText: data.text
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
    const { editText } = this.state;
    const { data, editTodo, deleteTodo } = this.props;
    const val = editText.trim();

    if (val) {
      this.setState({ editing: false, editText: val });
      editTodo(data.id, val);
    } else {
      deleteTodo(data.id);
    }
  }

  handleToggle() {
    const { data, completeTodo } = this.props;
    completeTodo(data.id);
  }

  handleDestroy() {
    const { data, deleteTodo } = this.props;
    deleteTodo(data.id);
  }

  handleKeyDown(event) {
    const { data } = this.props;

    if (event.which === 27) {
      this.setState({ editing: false, editText: data.text });
    } else if (event.which === 13) {
      this.handleSubmit();
    }
  }

  handleChange(event) {
    this.setState({ editText: event.target.value });
  }

  render() {
    let className = '';
    const { data } = this.props;
    const { editing, editText } = this.state;

    if (data.completed) {
      className += ' completed';
    }
    if (editing) {
      className += ' editing';
    }

    return (
      <li className={className}>
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            checked={data.completed}
            onChange={this.handleToggle}
          />
          <label htmlFor="toggle" onDoubleClick={this.handleEdit}>
            {data.text}
          </label>
          <button
            type="button"
            aria-label="Delete"
            className="destroy"
            onClick={this.handleDestroy}
          />
        </div>
        <input
          type="text"
          className="edit"
          value={editText}
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
    created_at: PropTypes.instanceOf(Date).isRequired
  }).isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired
};

export default TodoItem;
