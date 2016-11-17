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

const form = (state = { key: '', text: '' }, action) => {
  switch (action.type) {
  case KEY_CHANGE:
    debugger
    return Object.assign({}, state, { key: action.key });
  case TEXT_CHANGE:
    return Object.assign({}, state, { text: action.text });
  default:
    return state;
  }
}

export default combineReducers({
  todos,
  form
});
