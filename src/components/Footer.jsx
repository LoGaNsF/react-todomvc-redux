import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/FilterTypes';

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
};

class Footer extends Component {
  renderFilterLink(link) {
    const { filter, onFilter } = this.props;
    const title = FILTER_TITLES[link];
    const selectedClass = link === filter ? 'selected' : '';
    const onClick = (e) => {
      e.preventDefault();
      onFilter(link);
    };

    return (
      <a href={`#/${title.toLowerCase()}`} className={selectedClass} onClick={onClick}>
        {title}
      </a>
    );
  }

  renderClearButton() {
    const { onClearCompleted } = this.props;

    return (
      <button type="button" className="clear-completed" onClick={() => onClearCompleted()}>
        Clear completed
      </button>
    );
  }

  render() {
    const { activeCount, completedCount } = this.props;
    const countText = activeCount > 1 ? ' items left' : ' item left';

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{activeCount}</strong>
          {countText}
        </span>
        <ul className="filters">
          {['SHOW_ALL', 'SHOW_ACTIVE', 'SHOW_COMPLETED'].map(filter => (
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          ))}
        </ul>
        {!!completedCount && this.renderClearButton()}
      </footer>
    );
  }
}

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
  onClearCompleted: PropTypes.func.isRequired
};

export default Footer;
