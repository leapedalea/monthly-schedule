import React, { PureComponent, Fragment } from 'react';

export class ReminderItem extends PureComponent {
  render() {
    const { description, time, city, color, cityWeather } = this.props

    return (
      <Fragment>
        <div className="c_reminder" onClick={this.props.onEdit}>
          <span className="c_reminder__color-label" style={{background: color}}></span>
          <span className="c_reminder__time">{time}</span>
          <span className="c_reminder__description">{description}</span>
          {city ? <span className="c_reminder__city"> ({city})</span> : ''}
          {cityWeather ? <p>{cityWeather}</p> : ''}
        </div>
        <button type="button" onClick={this.props.onDelete}>Delete</button> 
      </Fragment>
    );
  }
}

export default ReminderItem;
