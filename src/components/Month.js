import React from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';

import MonthDay from '../components/MonthDay';

/**
 * Get days to display in given month,
 * so all weeks are complete (Sun-Sat)
 *
 * @param {int} Month (zero based)
 *
 * @return {Object} List of days to display
 */
const getMonthWeeks = month => {
  const monthDate = moment().month(month >= 0 ? month : new Date().getMonth());
  const firstMonthDay = moment(monthDate).startOf('month');
  const lastMonthDay = moment(monthDate).endOf('month');
  const firstSunday = moment(firstMonthDay).subtract(firstMonthDay.day(), 'days');
  const weeksCount = lastMonthDay.week() - firstMonthDay.week() > 0 ?
    lastMonthDay.week() - firstMonthDay.week() + 1 :
    5;
  const daysCount = weeksCount * moment.weekdays().length;
  const days = (new Array(daysCount)).fill(0).map((el, index) =>
    moment(firstSunday).add(index, 'days')
  );

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

/**
 * Get reminders for a specific date from props reminders.
 *
 * @param {Object} List of all reminders
 * @param {Moment} Date to retrieve reminders
 *
 * @return {Array} List of date reminders
 */
const remindersByDate = (reminders, date) => {
  return reminders
    .filter(r => r.datetime.isSame(date, 'day'))
    .sort((a, b) => a.datetime.diff(b.datetime))
};

const Month = ({ month, reminders, cityWeather, actions }) => (
  <div className="c_month">
    <div className="c_month__nav">
      <button
        type="button"
        className="c_month__nav__button c_month__nav__button--prev"
        disable={(month > 0).toString()}
        onClick={() => actions.setMonth(month - 1)}
      >
        <GrLinkPrevious />
        <span 
          className="l_screen-reader-text"
        >Prev month</span>
      </button>
      <h1 className="c_month__name">{
        moment().month(month).format("MMMM")
      }</h1>

      <button
        type="button"
        className="c_month__nav__button c_month__nav__button--next"
        disable={(month < 11).toString()}
        onClick={() => actions.setMonth(month + 1)}
      >
        <GrLinkNext />
        <span 
          className="l_screen-reader-text"
        >Next month</span>
      </button>
    </div>

    <div className="c_month__calendar">
      {moment.weekdays().map(day => (
        <p className="c_month__calendar__day-name" key={day}>{day}</p>
      ))}
      {getMonthWeeks(month).map((date, index) => (
        <MonthDay 
          key={date.format("DD/MM")}
          cityWeather={getDateWeather(cityWeather, date)}
          date={date}
          reminders={remindersByDate(reminders, date)}
          weekend={index % 7 === 0 || index % 7 === 6}
          disable={date.month() !== month}
          onEdit={actions.setReminderEditing}
          onDelete={actions.deleteReminder}
          onClearDay={() => actions.deleteRemindersByDay({ date })}
        />
      ))}
    </div>
  </div>
);

Month.propTypes = {
  month: PropTypes.number,
  reminders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    datetime: PropTypes.object.isRequired,
    color: PropTypes.string.isRequired,
    city: PropTypes.string
  }).isRequired).isRequired,
  cityWeather: PropTypes.array,
  actions: PropTypes.object
}

export default Month;