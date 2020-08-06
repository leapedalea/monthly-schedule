import React, { Fragment } from 'react'
import * as moment from 'moment'

import MonthDay from '../components/MonthDay'

const getMonthWeeks = month => {
  const monthDate = moment().month(month >= 0 ? month : new Date().getMonth()),
    days = [];
  const firstMonthDay = moment(monthDate).startOf('month');
  const lastMonthDay = moment(monthDate).endOf('month');
  const firstSunday = moment(firstMonthDay).subtract(firstMonthDay.day(), 'days');
  const weeksCount = moment(lastMonthDay).week() - moment(firstMonthDay).week() > 0 ?
    moment(lastMonthDay).week() - moment(firstMonthDay).week() + 1 :
    5;

  let current;

  for (let i = 0; i < weeksCount * 7; i++) {
    current = moment(firstSunday).add(i, 'days');
    days.push(current);
  }

  return days;
}

/**
 * Get forecast for a specific date from week weather forecast.
 *
 * @param {Array} List of forecast for next days
 * @param {Moment} Date to retrieve
 *
 * @return {Object} Weather object
 */
const getDateWeather = (cityWeather, date) => (
  cityWeather
    .find(forecast => moment(forecast.date)
      .isSame(date, 'day')
    )
);

const remindersByDate = (date, reminders) => {
  return reminders
    .filter(r => r.datetime.isSame(date, 'day'))
    .sort((a, b) => a.datetime.diff(b.datetime))
}

const Month = ({ month, reminders, cityWeather, actions }) =>
  (
    <Fragment>
      <h1>{moment().month(month).format("MMMM")}</h1>

      {month > 0 && <button
        type="button"
        onClick={() => actions.setMonth(month - 1)}
      >Prev month</button>}
      {month < 11 && <button
        type="button"
        onClick={() => actions.setMonth(month + 1)}
      >Next month</button>}

      <div className="c_month">
        {moment.weekdays().map(day => (
          <p className="c_month__day-name" key={day}>{day}</p>
        ))}
        {getMonthWeeks(month).map((date, index) => (
          <MonthDay 
            key={date.format("DD/MM")}
            cityWeather={getDateWeather(cityWeather, date)}
            date={date}
            reminders={remindersByDate(date, reminders)}
            onEdit={actions.setReminderEditing}
            onDelete={actions.deleteReminder}
            onClearDay={() => actions.deleteRemindersByDay({ date })}
          />
        ))}
      </div>
    </Fragment>
  )

export default Month;