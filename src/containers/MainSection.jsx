import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/TodoActions';
import { getCompletedTodosCount } from '../selectors';

import MainSection from '../components/MainSection';

const mapStateToProps = (state) => ({
  todosCount: state.todos.length,
  completedCount: getCompletedTodosCount(state)
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
