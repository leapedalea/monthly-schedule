import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { GrFormClose } from 'react-icons/gr';

export class ReminderItem extends PureComponent {
  static propTypes = {
    description: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    city: PropTypes.string,
    color: PropTypes.string.isRequired,
    cityWeather: PropTypes.object.isRequired
  };

  render() {
    const { description, time, city, color, cityWeather } = this.props

    return (
      <div className="c_reminder" onClick={this.props.onEdit}>
        <span className="c_reminder__color-label" style={{backgroundColor: color}}></span>
        <p className="c_reminder__description">{
          description
        }</p>
        <div>
          {city ? <span className="c_reminder__city">{city},&nbsp;</span> : ''}
          <span className="c_reminder__time">{time}</span>
        </div>
        {cityWeather.description ? <div>
          <span className="l_screen-reader-text">{
            cityWeather.description
          }</span>
          <img 
            src={`http://openweathermap.org/img/wn/${cityWeather.icon}@2x.png`}
            alt={cityWeather.description}
            className="c_reminder__weather-icon"
          />
        </div> : ''}
        <button
          type="button"
          onClick={this.props.onDelete}
          className="c_reminder__delete">
          <GrFormClose />
          <span 
            className="l_screen-reader-text"
          >Delete</span>
        </button> 
      </div>
    );
  }
}

export default ReminderItem;
