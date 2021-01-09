import { SET_VISIBILITY_FILTER } from '../constants/FilterTypes';

export default function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
}
