import React from 'react'
import ReminderCreator from '../components/ReminderCreator'

const MainSection = ({ reminders, actions }) =>
  (
    <main>
      <div>
        <ReminderCreator onSave={actions.addReminder} />
        <div id="month">
        </div>
      </div>
      <div id="day">Day</div>
    </main>
  )

export default MainSection;