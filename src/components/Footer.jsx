import React, { Component, PropTypes } from 'react';

import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/FilterTypes';

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
};

class Footer extends Component {
  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter];
    const selectedClass = filter === this.props.filter ? 'selected' : '';
    const onClick = (e) => {
      e.preventDefault();
      this.props.onFilter(filter);
    };

    return (
      <a href={`#/${title.toLowerCase()}`} className={selectedClass} onClick={onClick}>
        {title}
      </a>
    );
  }

  renderClearButton() {
    return (
      <button className="clear-completed" onClick={() => this.props.onClearCompleted()}>
        Clear completed
      </button>
    );
  }

  render() {
    const { activeCount } = this.props;
    const countText = this.props.activeCount > 1 ? 'items left' : 'item left';

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{activeCount}</strong> {countText}
        </span>
        <ul className="filters">
          {['SHOW_ALL', 'SHOW_ACTIVE', 'SHOW_COMPLETED'].map(filter =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
        {!!this.props.completedCount && this.renderClearButton()}
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
