import React from 'react'
import * as moment from 'moment'

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

const remindersByDate = (date, reminders) => 
  reminders
    .filter(r => r.datetime.isSame(date, 'day'))
    .sort((a, b) => a.datetime.diff(b.datetime))

const Month = ({ reminders, actions }) =>
  (
    <div>
    {getDaysByMonth().map(date => 
      <div>
        <p>{date.format("DD/MM")}</p>
        {remindersByDate(date, reminders).map(r => 
          <p>{`${r.datetime.format("hh:mm")}: ${r.description} (${r.city})`}</p>
        )}
      </div>
    )}
    </div>
  )

export default Month;