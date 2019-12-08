import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

const TodoList = ({ todos, actions }) => (
  <ul className="todo-list">
    {todos.map(todo => <TodoItem key={todo.id} data={todo} {...actions} />)}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    created_at: PropTypes.object.isRequired
  }).isRequired).isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired
};

export default TodoList;
