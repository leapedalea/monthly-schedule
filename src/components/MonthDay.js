import React, { PureComponent } from 'react';
import ReminderItem from '../components/ReminderItem'

export class MonthDay extends PureComponent {
  handleEdit = id => () => this.props.onEdit({ id });

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
            cityWeather={cityWeather ? cityWeather[r.city] : ''}
            onEdit={this.handleEdit(r.id)}
            onDelete={this.handleDelete(r.id)}
          />
        )}
      </div>
    );
  }
}

export default MonthDay;
