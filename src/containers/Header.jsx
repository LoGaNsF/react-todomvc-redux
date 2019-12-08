import { connect } from 'react-redux';
import { addTodo } from '../actions/TodoActions';

import Header from '../components/Header';

export default connect(null, { addTodo })(Header);
