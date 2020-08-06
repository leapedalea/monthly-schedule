import axios from 'axios';

import CityList from './cityList';
import { openWeatherApi } from '../config';

export default class OpenWeatherApi {
  constructor() {
    this.apiKey = openWeatherApi.secretKey;
    this.baseApiUrl = 'http://api.openweathermap.org/data/2.5';
  }

  getForecast(cityName) {
    const cityCoord = this.getCityCoordinates(cityName);
    const endpointForecast = this.baseApiUrl + '/onecall';
    const params = {
      appid: this.apiKey,
      lang: this.lang,
      exclude: 'current,minutely,hourly',
      lat: cityCoord.lat,
      lon: cityCoord.lon,
    };

    const promise = axios.get(endpointForecast, { params })
      .then(forecastReponse => {
        const forecastData = forecastReponse.data;

        if (forecastData) {
          return forecastData.daily.map(
            day => ({
              date: day.dt,
              forecast: day.weather[0].description
            }));
        }

        return {};
      });
      
    return promise;
  }

  getCityCoordinates(cityName) {
    return CityList.find(city => city.name === cityName).coord;
  }
}