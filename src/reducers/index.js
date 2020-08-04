import { combineReducers } from 'redux'
import month from './month'
import reminders from './reminders'
import reminderEditing from './reminderEditing'

const rootReducer = combineReducers({
  month,
  reminders,
  reminderEditing
})

export default rootReducer