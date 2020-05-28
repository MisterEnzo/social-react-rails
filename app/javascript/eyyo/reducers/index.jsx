import { combineReducers } from 'redux';
import posts from './posts_reducer';
import followables from './followables_reducer';

const rootReducer = combineReducers({
  posts,
  followables
});

export default rootReducer;