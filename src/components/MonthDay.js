import React, { PureComponent } from 'react';
import ReminderItem from '../components/ReminderItem'

export class MonthDay extends PureComponent {
  handleEdit = index => () => this.props.onEdit(index);
  
  handleDelete = index => () => this.props.onDelete(index);

  render() {
    const { date, reminders } = this.props

    return (
      <div className="c_month__day c_day">
        <p className="c_day__date">{date.format("DD/MM")}</p>
        {reminders.map((r, index) => 
          <ReminderItem
            key={index}
            description={r.description}
            time={r.datetime.format("hh:mm a")}
            city={r.city}
            color={r.color}
            onEdit={this.handleEdit(r.id)}
            onDelete={this.handleDelete(r.id)}
          />
        )}
      </div>
    );
  }
}

export default MonthDay;
