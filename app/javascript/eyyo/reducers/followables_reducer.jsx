import * as types from '../actions/action_types';
import initialState from './initial_state';

export default function followablesReducer(state = initialState.followables, action){
  switch (action.type){
    case types.FETCH_FOLLOWABLES:
      return action.followables;
    default:
      return state;
  }
}