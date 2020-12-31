import PropTypes from 'prop-types';
import classnames from 'classnames';

const Link = ({ active, children, setFilter }) => (
  <a
    className={classnames({ selected: active })}
    style={{ cursor: 'pointer' }}
    onClick={() => setFilter()}
    onKeyDown={() => setFilter()}
    role="button"
    tabIndex="0">
    {children}
  </a>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default Link;
