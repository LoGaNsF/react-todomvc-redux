import * as TodoTypes from '../constants/TodoTypes';

export const addTodo = (text) => ({
  type: TodoTypes.ADD_TODO,
  text
});

export const deleteTodo = (id) => ({
  type: TodoTypes.DELETE_TODO,
  id
});

export const editTodo = (id, text) => ({
  type: TodoTypes.EDIT_TODO,
  id,
  text
});

export const completeTodo = (id) => ({
  type: TodoTypes.COMPLETE_TODO,
  id
});

export const completeAll = (completed) => ({
  type: TodoTypes.COMPLETE_ALL,
  completed
});

export const clearCompleted = () => ({
  type: TodoTypes.CLEAR_COMPLETED
});
