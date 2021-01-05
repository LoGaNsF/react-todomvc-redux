import PropTypes from 'prop-types';

import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/FilterTypes';

import FilterLink from '../containers/FilterLink';

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
};

const Footer = ({ activeCount, completedCount, onClearCompleted }) => (
  <footer className="footer">
    <span className="todo-count">
      <strong>{activeCount}</strong>
      {activeCount > 1 ? ' items left' : ' item left'}
    </span>
    <ul className="filters">
      {Object.keys(FILTER_TITLES).map((filter) => (
        <li key={filter}>
          <FilterLink filter={filter}>{FILTER_TITLES[filter]}</FilterLink>
        </li>
      ))}
    </ul>
    {!!completedCount && (
      <button type="button" className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    )}
  </footer>
);

Footer.propTypes = {
  activeCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired
};

export default Footer;
