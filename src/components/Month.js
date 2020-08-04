import React from 'react'
import * as moment from 'moment'

import MonthDay from '../components/MonthDay'

const getMonthWeeks = monthDate => {
  const date = monthDate || new Date(),
    days = [];
  const firstMonthDay = moment(date).startOf('month');
  const lastMonthDay = moment(date).endOf('month');
  const firstSunday = moment(firstMonthDay).subtract(firstMonthDay.date(), 'days');
  const weeksCount = moment(lastMonthDay).week() - moment(firstMonthDay).week();
  
  let current;

  for (let i = 0; i < weeksCount * 7; i++) {
    current = moment(firstSunday).add(i, 'days');
    days.push(current);
  }

  return days;
}

const remindersByDate = (date, reminders) => {
  return reminders
    .filter(r => r.datetime.isSame(date, 'day'))
    .sort((a, b) => a.datetime.diff(b.datetime))
}

const Month = ({ reminders, actions }) =>
  (
    <div className="c_month">
    {moment.weekdays().map(day => (
      <p className="c_month__day-name">{day}</p>
    ))}
    {getMonthWeeks().map(date => (
      <MonthDay 
        key={date.format("DD/MM")}
        date={date}
        reminders={remindersByDate(date, reminders)}
        onEdit={actions.setReminderEditing}
      />
    ))}
    </div>
  )

export default Month;