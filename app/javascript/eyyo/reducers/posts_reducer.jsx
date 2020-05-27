import * as types from '../actions/action_types';
import initialState from './initial_state';

export default function postsReducer(state = initialState.posts, action){
  switch (action.type){
    case types.FETCH_POSTS:
      return action.posts;
    case types.SEND_POST:
      return [
        Object.assign({}, action.post),
        ...state
      ];
    default:
      return state;
  }
}
