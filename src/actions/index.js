import * as types from '../redux/ActionTypes'

// month
export const setMonth = month => ({ type: types.SET_MONTH, month })

// reminders
export const addReminder = (description, datetime, city, color) => ({ type: types.ADD_REMINDER, description, datetime, city, color })
export const updateReminder = (id, description, datetime, city, color) => ({ type: types.UPDATE_REMINDER, id, description, datetime, city, color })
export const deleteReminder = id => ({ type: types.DELETE_REMINDER, id })
export const deleteRemindersByDay = date => ({ type: types.DELETE_REMINDERS_BY_DATE, date })

// reminder edition
export const setReminderEditing = id => ({ type: types.SET_REMINDER_EDITING, id })

// city forecast
export const requestCityForecast = city => ({ type: types.CITY_FORECAST_FETCH_REQUESTED, city })
