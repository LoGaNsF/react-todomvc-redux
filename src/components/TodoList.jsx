import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/FilterTypes';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
};

class TodoList extends Component {
  renderToggleAll() {
    const { todos, actions } = this.props;
    const completed = todos.reduce((count, task) => (task.completed ? count + 1 : count), 0);

    return (
      <div>
        <input
          type="checkbox"
          id="toggle-all"
          className="toggle-all"
          checked={completed === todos.length}
          onChange={e => actions.completeAll(e.target.checked)}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
      </div>
    );
  }

  render() {
    const { todos, filter, actions } = this.props;
    const filteredTodos = todos.filter(TODO_FILTERS[filter]);

    return (
      <section className="main">
        {!!todos.length && this.renderToggleAll()}
        <ul className="todo-list">
          {filteredTodos.map(todo => <TodoItem key={todo.id} data={todo} {...actions} />
          )}
        </ul>
      </section>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    created_at: PropTypes.object.isRequired
  }).isRequired).isRequired,
  filter: PropTypes.string.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired
};

export default TodoList;
