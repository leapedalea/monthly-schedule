import React, { PureComponent } from 'react';

export class MonthDay extends PureComponent {
  render() {
    const { date, reminders } = this.props

    return (
      <div>
        <p>{date.format("DD/MM")}</p>
        {reminders.map(r => 
          <p>{`${r.description} (${r.datetime.format("hh:mm a")}, ${r.city})`}</p>
        )}
      </div>
    );
  }
}

export default MonthDay;
