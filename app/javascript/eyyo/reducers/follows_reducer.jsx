import * as types from '../actions/action_types';
import initialState from './initial_state';

export default function followsReducer(state = initialState.follows, action){
  switch (action.type){
    case types.FETCH_FOLLOWS:
      return action.follows;
    default:
      return state;
  }
}