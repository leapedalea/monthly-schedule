import React, { PureComponent } from 'react';
import ReminderItem from '../components/ReminderItem'

export class MonthDay extends PureComponent {
  handleEdit = index => () => this.props.onEdit(index);

  render() {
    const { date, reminders } = this.props

    return (
      <div>
        <p>{date.format("DD/MM")}</p>
        {reminders.map((r, index) => 
          <ReminderItem
            key={index}
            description={r.description}
            time={r.datetime.format("hh:mm a")}
            city={r.city}
            color={r.color}
            onEdit={this.handleEdit(r.id)}
          />
        )}
      </div>
    );
  }
}

export default MonthDay;
