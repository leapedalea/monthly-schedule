import React from 'react'
import MonthView from '../containers/MonthView'
import ReminderEditor from '../components/ReminderEditor'
import * as moment from 'moment'

const MainSection = ({ reminderEditing, actions }) => (
    <main>
      <div>
        <button
          type="button"
          onClick={() => actions.setReminderEditing({ id: null })}
          >Create new reminder
        </button>
        {reminderEditing ?
          <ReminderEditor
            key={reminderEditing.id}
            onSave={payload => {
              actions.updateReminder({ id: reminderEditing.id, ...payload })
              actions.setReminderEditing({ id: null })
            }}
            onCancel={() => actions.setReminderEditing({ id: null })}
            {...reminderEditing} /> :
          <ReminderEditor
            onSave={payload => {
              const { city, datetime } = payload;

              actions.addReminder(payload)
              if (datetime.diff(moment(), 'days') < 7) {
                actions.requestCityForecast({ city })
              }
            }} />
        }
        <MonthView />
      </div>
    </main>
  )

export default MainSection;