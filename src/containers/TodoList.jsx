import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/TodoActions';

import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/FilterTypes';

import TodoList from '../components/TodoList';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: (todo) => !todo.completed,
  [SHOW_COMPLETED]: (todo) => todo.completed
};

const mapStateToProps = (state) => ({
  todos: state.todos.filter(TODO_FILTERS[state.visibilityFilter])
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
