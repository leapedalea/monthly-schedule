import {
  FETCH_CITY_FORECAST
} from '../redux/ActionTypes'

const initialState = {}

export default function reminders(state = initialState, action) {
  switch (action.type) {
    case FETCH_CITY_FORECAST:

      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=current,minutely,hourly&appid=c369621dc49ef59144a85feefd95935a`)
      .then(res => res.json())
      .then((data) => {
        
      })
      .catch(console.log)

      return {
        ...state,
        {
          description: action.description,
          datetime: action.datetime,
          city: action.city,
          color: action.color,
          id: state.reduce((maxId, r) => Math.max(r.id, maxId), -1) + 1,
        }
      }

    default:
      return state
  }
}