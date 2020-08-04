import {
  SET_MONTH
} from '../redux/ActionTypes'

const initialState = new Date().getMonth();

export default function month(state = initialState, action) {
  switch (action.type) {
    case SET_MONTH:
      return action.month

    default:
      return state
  }
}