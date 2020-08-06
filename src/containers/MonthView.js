import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as moment from 'moment'
import { bindActionCreators } from 'redux'

import * as ReminderActions from '../actions'
import Month from '../components/Month'


class MonthView extends Component {
  componentDidMount() {
    const { reminders, actions } = this.props;

    // get cities in next 7 days reminders
    const uniqueCities = reminders.filter(r => {
      const diff = r.datetime.diff(moment(), 'days');

      return diff < 7 && diff >= -1;
    }).reduce((cities, r) => 
      cities.includes(r.city) ? 
        cities : 
        [...cities, r.city], 
    []);

    // request weather forecasts
    uniqueCities.forEach(city => 
      actions.requestCityForecast({ city })
    )
  }

  render() {
    return <Month {...this.props} />
  }
}

const mapStateToProps = state => ({
  reminders: state.reminders,
  month: state.month,
  cityWeather: state.cityWeather
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ReminderActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MonthView)