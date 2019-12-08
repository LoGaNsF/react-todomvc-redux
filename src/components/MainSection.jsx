import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import TodoList from '../containers/TodoList';

const MainSection = ({ todosCount, completedCount, actions }) => (
  <section className="main">
    {
      !!todosCount && (
        <span>
          <input
            type="checkbox"
            id="toggle-all"
            className="toggle-all"
            checked={todosCount === completedCount}
            onChange={e => actions.completeAll(e.target.checked)}
          />
          <label htmlFor="toggle-all">Mark all as complete</label>
        </span>
      )
    }
    <TodoList />
    {
      !!todosCount && (
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={actions.clearCompleted}
        />
      )
    }
  </section>
);

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired
};

export default MainSection;
