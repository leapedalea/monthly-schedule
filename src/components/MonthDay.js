import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReminderItem from '../components/ReminderItem';

export class MonthDay extends PureComponent {
  static propTypes = {
    date: PropTypes.object.isRequired,
    reminders: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      datetime: PropTypes.object.isRequired,
      color: PropTypes.string.isRequired,
      city: PropTypes.string
    }).isRequired).isRequired,
    cityWeather: PropTypes.object,
    weekend: PropTypes.bool,
    disable: PropTypes.bool,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  /**
   * Create a handler for a reminder edition with the id
   *
   * @param {int} Reminder id
   *
   * @return {Function} Call to props given handler
   */
  handleEdit = id => () => this.props.onEdit({ id });

  /**
   * Create a handler for a reminder deletion with the id
   *
   * @param {int} Reminder id
   *
   * @return {Function} Call to props given handler
   */
  handleDelete = id => () => this.props.onDelete({ id });

  render() {
    const { date, reminders, cityWeather, weekend, disable } = this.props

    return (
      <div className={
        `c_month__calendar__day c_day ${
          weekend ? ' c_day--weekend' : ''
        } ${
          disable ? ' c_day--disable' : ''
        }`
      }>
        {reminders.length > 0 ? <button
            type="button"
            className="c_day__button--clear"
            onClick={this.props.onClearDay}
          >Clear all</button> :
        ''}
        <span 
          className="c_day__date">{
          date.format("DD")
        }</span>
        {reminders.map((r, index) => 
          <ReminderItem
            key={index}
            description={r.description}
            time={r.datetime.format("hh:mm a")}
            city={r.city}
            color={r.color}
            cityWeather={cityWeather ? cityWeather[r.city] : {}}
            onEdit={this.handleEdit(r.id)}
            onDelete={this.handleDelete(r.id)}
          />
        )}
      </div>
    );
  }
}

export default MonthDay;
