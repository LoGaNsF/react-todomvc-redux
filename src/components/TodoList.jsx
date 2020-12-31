import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

const TodoList = ({ todos, actions }) => (
  <ul className="todo-list">
    {todos.map((todo) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <TodoItem key={todo.id} data={todo} {...actions} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      created_at: PropTypes.instanceOf(Date).isRequired
    }).isRequired
  ).isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired
};

export default TodoList;
