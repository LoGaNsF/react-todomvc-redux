import { createSelector } from 'reselect';

const getVisibilityFilter = (state) => state.visibilityFilter;
const getTodos = (state) => state.todos;

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  // eslint-disable-next-line consistent-return
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter((t) => t.completed);
      case 'SHOW_ACTIVE':
        return todos.filter((t) => !t.completed);
      default:
        throw new Error(`Unknown filter: ${visibilityFilter}`);
    }
  }
);

export const getActiveTodosCount = createSelector([getTodos], (todos) =>
  todos.reduce((count, todo) => (!todo.completed ? count + 1 : count), 0)
);

export const getCompletedTodosCount = createSelector([getTodos], (todos) =>
  todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0)
);

export const areAllTodosCompleted = createSelector(
  [getTodos],
  (todos) => todos.length && todos.every((todo) => todo.completed)
);
