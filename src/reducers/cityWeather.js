import * as moment from 'moment'
import {
  CITY_FORECAST_FETCH_FAILED,
  CITY_FORECAST_FETCH_SUCCEEDED
} from '../redux/ActionTypes'

const initialState = new Array(6).fill({});

export default function cityWeather(state = initialState, action) {
  switch (action.type) {
    case CITY_FORECAST_FETCH_FAILED:
      // TODO: print error
      return state;
    case CITY_FORECAST_FETCH_SUCCEEDED:

      return action.payload.forecast.map((day, index) => {
        const date = new Date(day.date * 1000); // UNIX date conversion
        let currentWeather = state
          .find(w => moment(w.date).isSame(date, 'day')) || {};

        if (!currentWeather.date)
          currentWeather.date = date;
        currentWeather[action.payload.city] = day.forecast;

        return currentWeather
      });

    default:
      return state
  }
}