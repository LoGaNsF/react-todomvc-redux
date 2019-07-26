import { SET_VISIBILITY_FILTER } from '../constants/FilterTypes';

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});
