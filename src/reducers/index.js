import { combineReducers } from 'redux'
import reminders from './reminders'
import reminderEditing from './reminderEditing'

const rootReducer = combineReducers({
  reminders,
  reminderEditing
})

export default rootReducer