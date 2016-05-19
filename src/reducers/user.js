import * as types from '../actions/actionTypes';
import {OPCO_PROPERTIES} from '../config/opcos/stsh';

const initialState = {OPCO_PROPERTIES};

export default function user(state = initialState, action = {}) {
  switch(action.type) {
  case types.USER:
    return state;
  default:
    return state;
  }
}
