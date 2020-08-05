import * as types from '../redux/ActionTypes'

// month
export const setMonth = month => ({ type: types.SET_MONTH, month })

// reminders
export const addReminder = (description, datetime, city, color) => ({ type: types.ADD_REMINDER, description, datetime, city, color })
export const updateReminder = (id, description, datetime, city, color) => ({ type: types.UPDATE_REMINDER, id, description, datetime, city, color })
export const deleteReminder = id => ({ type: types.DELETE_REMINDER, id })

// reminder edition
export const setReminderEditing = id => ({ type: types.SET_REMINDER_EDITING, id })