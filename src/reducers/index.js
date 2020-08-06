import { combineReducers } from 'redux'
import month from './month'
import reminders from './reminders'
import reminderEditing from './reminderEditing'
import cityWeather from './cityWeather'

const rootReducer = combineReducers({
  month,
  reminders,
  reminderEditing,
  cityWeather,
})

export default rootReducer