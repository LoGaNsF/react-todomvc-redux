import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as TodoActions from '../actions/TodoActions';
import { setVisibilityFilter } from '../actions/FilterActions';

import Header from '../components/Header';
import TodoList from '../components/TodoList';
import Footer from './Footer';

const App = ({ todos, visibilityFilter, actions, setFilter }) => {
  const completedCount = todos.reduce((count, todo) => {
    return todo.completed ? count + 1 : count;
  }, 0);
  const activeCount = todos.length - completedCount;

  return (
    <section className="todoapp">
      <Header addTodo={actions.addTodo} />
      <TodoList todos={todos} filter={visibilityFilter} actions={actions} />
      <Footer
        completedCount={completedCount}
        activeCount={activeCount}
        filter={visibilityFilter}
        onFilter={setFilter}
        onClearCompleted={actions.clearCompleted}
      />
    </section>
  );
};

App.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    created_at: PropTypes.object.isRequired
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  setFilter: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos,
  visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
  setFilter: filter => dispatch(setVisibilityFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
