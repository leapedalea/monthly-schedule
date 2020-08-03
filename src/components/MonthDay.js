import React, { PureComponent } from 'react';

export class MonthDay extends PureComponent {
  render() {
    const { date, reminders } = this.props

    return (
      <div>
        <p>{date.format("DD/MM")}</p>
        {reminders.map(r => 
          <p><span style={{
            display: 'inline-block',
            width: '1em',
            height: '1em',
            'border-radius': '50%',
            background: r.color
          }}></span>{`${r.description} (${r.datetime.format("hh:mm a")}${r.city ? `, ${r.city}` : ''})`}</p>
        )}
      </div>
    );
  }
}

export default MonthDay;
