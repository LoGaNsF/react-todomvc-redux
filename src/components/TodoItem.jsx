import { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TodoItem = ({ data, editTodo, deleteTodo, completeTodo }) => {
  const [state, setState] = useState({ editing: false, editText: data.text });

  const handleSubmit = () => {
    const val = state.editText.trim();

    if (val) {
      setState({ editing: false, editText: val });
      editTodo(data.id, val);
    } else {
      deleteTodo(data.id);
    }
  };

  const handleKeyDown = (event) => {
    if (event.which === 27) {
      setState({ editing: false, editText: data.text });
    } else if (event.which === 13) {
      handleSubmit();
    }
  };

  const handleChange = (event) => {
    setState({ editText: event.target.value });
  };

  return (
    <li className={classnames({ completed: data.completed, editing: state.editing })}>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={data.completed}
          onChange={() => completeTodo(data.id)}
        />
        <label htmlFor="toggle" onDoubleClick={() => setState({ editing: true })}>
          {data.text}
        </label>
        <button
          type="button"
          aria-label="Delete"
          className="destroy"
          onClick={() => deleteTodo(data.id)}
        />
      </div>
      <input
        type="text"
        className="edit"
        value={state.editText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </li>
  );
};

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
