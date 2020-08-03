import React from 'react'
import MonthView from '../containers/MonthView'
import ReminderCreator from '../components/ReminderCreator'

const MainSection = ({ reminders, actions }) =>
  (
    <main>
      <div>
        <ReminderCreator onSave={actions.addReminder} />
        <MonthView />
      </div>
      <div id="day">Day</div>
    </main>
  )

export default MainSection;