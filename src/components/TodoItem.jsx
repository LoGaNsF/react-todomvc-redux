import { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TodoItem = ({ data, editTodo, deleteTodo, completeTodo }) => {
  const [text, setText] = useState(data.text);
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => setText(e.target.value);

  const handleBlur = () => {
    editTodo(data.id, text);
    setEditing(false);
  };

  return (
    <li className={classnames({ completed: data.completed, editing })}>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={data.completed}
          onChange={() => completeTodo(data.id)}
        />
        <label htmlFor="toggle" onDoubleClick={() => setEditing(true)}>
          {data.text}
        </label>
        <button
          type="button"
          aria-label="Delete"
          className="destroy"
          onClick={() => deleteTodo(data.id)}
        />
      </div>
      {editing && (
        <input
          className="edit"
          value={text}
          onInput={handleChange}
          onBlur={handleBlur}
          onChange={() => {}}
        />
      )}
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
