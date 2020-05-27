import { combineReducers } from 'redux';
import posts from './posts_reducer';
import follows from './follows_reducer';

const rootReducer = combineReducers({
  posts,
  follows
});

export default rootReducer;