import { combineReducers } from 'redux';

import { KEY_CHANGE, SAVE_TODOS, TEXT_CHANGE } from './constants';

const todos = (state = [], action) => {
  switch (action.type) {
  case SAVE_TODOS:
    return action.todos;
  default:
    return state;
  }
}

const initial = { text: '' }

const form = (state = initial, action) => {
  switch (action.type) {
  case TEXT_CHANGE:
    return { text: action.text };
  case 'FETCHING':
    return initial;
  default:
    return state;
  }
}

export default combineReducers({
  todos,
  form
});
