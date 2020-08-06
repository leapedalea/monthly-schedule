import React from 'react';
import * as moment from 'moment';

import MonthView from '../containers/MonthView';
import ReminderEditor from '../components/ReminderEditor';

const MainSection = ({ reminderEditing, cityWeather, actions }) => (
    <main>
      <div>
        <button
          type="button"
          onClick={actions.setReminderEditing.bind(
            actions,
            { id: null }
          )}
          >Create new reminder
        </button>
        {reminderEditing ?
          <ReminderEditor
            key={reminderEditing.id}
            onSave={handleUpdateReminder(reminderEditing, actions)}
            onCancel={actions.setReminderEditing.bind(
              actions,
              { id: null }
            )}
            {...reminderEditing} /> :
          <ReminderEditor
            onSave={handleAddReminder(cityWeather, actions)} />
        }
        <MonthView />
      </div>
    </main>
  );

const handleAddReminder = (cityWeather, actions) => payload => {
  const { city, datetime } = payload;

  actions.addReminder(payload);

  // if new reminder is in next days and
  // it's weather hasn't been fetched, request it
  if (datetime.diff(moment(), 'days') < 7 &&
    !cityWeather[0][city]) {
    actions.requestCityForecast({ city })
  }
};

const handleUpdateReminder = (reminderEditing, actions) => payload => {
  actions.updateReminder({
    id: reminderEditing.id, 
    ...payload
  })
  actions.setReminderEditing({ id: null })
}

export default MainSection;