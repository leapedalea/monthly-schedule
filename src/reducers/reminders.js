import {
  ADD_REMINDER,
  UPDATE_REMINDER,
  DELETE_REMINDER,
} from '../redux/ActionTypes'

const initialState = []

export default function reminders(state = initialState, action) {
  switch (action.type) {
    case ADD_REMINDER:
      return [
        ...state,
        {
          description: action.description,
          datetime: action.datetime,
          city: action.city,
          color: action.color,
          id: state.reduce((maxId, r) => Math.max(r.id, maxId), -1) + 1,
        }
      ]

    case UPDATE_REMINDER:
      return state.map(r =>
        r.id === action.id ?
          { ...r, 
            description: action.description,
            datetime: action.datetime,
            city: action.city,
            color: action.color
          } :
          r
      )

    case DELETE_REMINDER:
      return state.filter(r =>
        r.id !== action.id
      )

    default:
      return state
  }
}