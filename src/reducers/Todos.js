import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from '../constants/TodoTypes';

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
          text: action.text,
          completed: false,
          created_at: new Date()
        }
      ];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case EDIT_TODO:
      return state.map(todo => (
        todo.id === action.id ? { ...todo, text: action.text } : todo
      ));
    case COMPLETE_TODO:
      return state.map(todo => (
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      ));
    case COMPLETE_ALL:
      return state.map(todo => ({ ...todo, completed: action.completed }));
    case CLEAR_COMPLETED:
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
}
