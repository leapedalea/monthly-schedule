import React from 'react'
import MonthView from '../containers/MonthView'
import ReminderEditor from '../components/ReminderEditor'

const MainSection = ({ reminderEditing, actions }) => (
    <main>
      <div>
        <button
          type="button"
          onClick={() => actions.setReminderEditing(null)}
          >Create new reminder
        </button>
        {reminderEditing ?
          <ReminderEditor
            key={reminderEditing.id}
            onSave={ (...args) => {
              actions.updateReminder(reminderEditing.id, ...args)
              actions.setReminderEditing(null)
            }}
            onCancel={() => actions.setReminderEditing(null)}
            {...reminderEditing} /> :
          <ReminderEditor onSave={actions.addReminder} />
        }
        <MonthView />
      </div>
    </main>
  )

export default MainSection;