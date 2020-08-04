import React, { PureComponent } from 'react';

export class ReminderItem extends PureComponent {
  render() {
    const { description, time, city, color, onEdit } = this.props

    return (
      <div className="c_reminder" onClick={onEdit}>
        <span className="c_reminder__color-label" style={{background: color}}></span>
        <span className="c_reminder__time">{time}</span>
        <span className="c_reminder__description">{description}</span>
        {city ? <span className="c_reminder__city"> ({city})</span> : ''}
      </div>
    );
  }
}

export default ReminderItem;
