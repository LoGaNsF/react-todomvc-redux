import { useDispatch, useSelector } from 'react-redux';

import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../store/constants/FilterTypes';
import { clearCompleted } from '../store/actions/TodoActions';
import setVisibilityFilter from '../store/actions/FilterActions';

import Link from './Link';
import { getActiveTodosCount, getCompletedTodosCount } from '../store/selectors';

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
};

const Footer = () => {
  const dispatch = useDispatch();
  const onClearCompleted = () => dispatch(clearCompleted());
  const activeCount = useSelector(getActiveTodosCount);
  const completedCount = useSelector(getCompletedTodosCount);
  const setFilter = (filter) => dispatch(setVisibilityFilter(filter));
  const visibilityFilter = useSelector((state) => state.visibilityFilter);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong>
        {activeCount > 1 ? ' items left' : ' item left'}
      </span>
      <ul className="filters">
        {Object.keys(FILTER_TITLES).map((filter) => (
          <li key={filter}>
            <Link active={visibilityFilter === filter} setFilter={() => setFilter(filter)}>
              {FILTER_TITLES[filter]}
            </Link>
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
};

export default Footer;
