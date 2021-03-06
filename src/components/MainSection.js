import React from 'react';
import * as moment from 'moment';

import MonthView from '../containers/MonthView';
import ReminderEditor from '../components/ReminderEditor';

const MainSection = ({ reminderEditing, cityWeather, actions }) => (
    <main className="c_main">
      <div className="c_main__detail-view">
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
      </div>
      <div className="c_main__month-view">
        <MonthView />
      </div>
    </main>
  );

/**
 * Create handler for reminder creation
 * with given data and actions
 *
 * @param {Object} State weather
 * @param {Object} Redux actions
 *
 * @return {Function} Handler for reminder creation
 */
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

/**
 * Create handler for reminder update
 * with given data and actions
 *
 * @param {int} State reminder in edition id
 * @param {Object} Redux actions
 *
 * @return {Function} Handler for reminder update
 */
const handleUpdateReminder = (reminderEditing, actions) => payload => {
  actions.updateReminder({
    id: reminderEditing.id, 
    ...payload
  })
  actions.setReminderEditing({ id: null })
}

export default MainSection;