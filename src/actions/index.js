import * as types from '../redux/ActionTypes'

// reminders
export const addReminder = (description, datetime, city, color) => ({ type: types.ADD_REMINDER, description, datetime, city, color })
export const updateReminder = (id, description, datetime, city, color) => ({ type: types.UPDATE_REMINDER, id, description, datetime, city, color })

// reminder edition
export const setReminderEditing = id => ({ type: types.SET_REMINDER_EDITING, id })