import * as moment from 'moment'
import {
  ADD_REMINDER,
  UPDATE_REMINDER,
  DELETE_REMINDER,
  DELETE_REMINDERS_BY_DATE,
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

    case DELETE_REMINDERS_BY_DATE:
    console.log(action.datetime)
      return state.filter(r =>
        !moment(r.datetime).isSame(action.date)
      )

    default:
      return state
  }
}