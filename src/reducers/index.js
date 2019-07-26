import { combineReducers } from 'redux';

import todos from './Todos';
import visibilityFilter from './VisibilityFilter';

const reducer = combineReducers({
  todos,
  visibilityFilter
});

export default reducer;
