import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/TodoActions';
import { getVisibleTodos } from '../selectors';

import TodoList from '../components/TodoList';

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
