import * as types from '../actions/action_types';
import initialState from './initial_state';

export default function followablesReducer(state = initialState.followables, action){
  switch (action.type){
    case types.FETCH_FOLLOWABLES:
      return action.followables;
    case types.FOLLOW:
      console.log(action.data);
      return state;
    case types.UNFOLLOW:
      console.log(action.data);
      return state;
    default:
      return state;
  }
}