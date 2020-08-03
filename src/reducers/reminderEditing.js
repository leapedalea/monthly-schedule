import {
  SET_REMINDER_EDITING,
} from '../redux/ActionTypes'

export default function reminderEditing(state = null, action) {
  switch (action.type) {
    case SET_REMINDER_EDITING:
      return action.id

    default:
      return state
  }
}