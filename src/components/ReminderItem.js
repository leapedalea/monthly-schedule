import React, { PureComponent } from 'react';

export class ReminderItem extends PureComponent {
  render() {
    const { description, time, city, color, onEdit } = this.props

    return (
      <div>
        <span style={{
          display: 'inline-block',
          width: '1em',
          height: '1em',
          'border-radius': '50%',
          background: color
        }}></span>
        <span> {`${description} (${time}${city ? `, ${city}` : ''})`}</span>
        <button onClick={onEdit}>Edit</button>
      </div>
    );
  }
}

export default ReminderItem;
