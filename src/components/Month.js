import React from 'react'
import * as moment from 'moment'

import MonthDay from '../components/MonthDay'

const getDaysByMonth = monthDate => {
  const date = monthDate || new Date(),
    days = [];
  let monthCount = moment(date).daysInMonth(),
    current;

  for (let i = monthCount; i > 0; i--) {
    current = moment(date).date(i);
    days.unshift(current);
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
    <div>
    {getDaysByMonth().map(date => {
      return <MonthDay 
        key={date.format("D")}
        date={date}
        reminders={remindersByDate(date, reminders)} />
    }
    )}
    </div>
  )

export default Month;