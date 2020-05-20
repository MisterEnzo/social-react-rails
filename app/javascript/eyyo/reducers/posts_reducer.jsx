import * as types from '../actions/action_types';
import initialState from './initial_state';

function postsReducer(state = initialState.posts, action){
  switch (action.type){
    case types.FETCH_POSTS:
      return action.posts;
    case types.SEND_POST:
      return [
        ...state,
        Object.assign({}, action.post)
      ];
      return state;
    default:
      return state;
  }
}

export default postsReducer;