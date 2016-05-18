import * as types from '../actions/actionTypes';

const initialState = {
  user: {
    name: 'default'
  }
};

export default function user(state = initialState, action = {}) {
  switch(action.type) {
  case types.USER:
    return Object.assign({}, state, {
      user: [{
        id: 1
      }, ...state.user]
    });
  default:
    return state;
  }
}
