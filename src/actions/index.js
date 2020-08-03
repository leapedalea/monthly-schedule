import * as types from '../redux/ActionTypes'

export const addReminder = (description, datetime, city, color) => ({ type: types.ADD_REMINDER, description, datetime, city, color })