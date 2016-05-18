import * as types from '../actions/actionTypes';

const initialState = {
  user: {
    name: 'Butch',
    age: 36
  }
};

export default function user(state = initialState, action = {}) {
  switch(action.type) {
  case types.USER:
    return state;
  default:
    return state;
  }
}
