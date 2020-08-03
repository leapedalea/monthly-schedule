import React from 'react'
import MonthView from '../containers/MonthView'
import ReminderCreator from '../components/ReminderCreator'

const MainSection = ({ reminderEditing, actions }) => (
    <main>
      <div>
        <button
          type="button"
          onClick={() => actions.setReminderEditing(null)}
          >Create new reminder
        </button>
        {reminderEditing ?
          <ReminderCreator
            key={reminderEditing.id}
            onSave={ (...args) => {
              actions.updateReminder(reminderEditing.id, ...args)
              actions.setReminderEditing(null)
            }}
            onCancel={() => actions.setReminderEditing(null)}
            {...reminderEditing} /> :
          <ReminderCreator onSave={actions.addReminder} />
        }
        <MonthView />
      </div>
      <div id="day">Day</div>
    </main>
  )

export default MainSection;