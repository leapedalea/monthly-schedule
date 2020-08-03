import {
  ADD_REMINDER,
} from '../redux/ActionTypes'

const initialState = []

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_REMINDER:
      return [
        ...state,
        {
          description: action.description,
          datetime: action.datetime,
          city: action.city
        }
      ]

    default:
      return state
  }
}