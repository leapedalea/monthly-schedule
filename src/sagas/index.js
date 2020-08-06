import { call, put, takeEvery } from 'redux-saga/effects'
import OpenWeatherApi from '../api/OpenWeatherApi';

function* fetchCityWeather(action) {
  const owapi = new OpenWeatherApi('c369621dc49ef59144a85feefd95935a');

  try {
    const forecast = yield call(
      owapi.getForecast.bind(owapi), 
      action.city
    );
    const payload = {
      city: action.city,
      forecast
    };

    yield put({ type: 'CITY_FORECAST_FETCH_SUCCEEDED', payload });
  } catch (e) {
    yield put({ type: 'CITY_FORECAST_FETCH_FAILED', message: e.message });
  }
}

function* weatherSaga() {
  yield takeEvery('CITY_FORECAST_FETCH_REQUESTED', fetchCityWeather);
}

export default weatherSaga;