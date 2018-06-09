import React from 'react';

import '../../../styles/weather-css/main-block-city.css';
import Humidity from '../../../images/humidity.png';
import Pressure from '../../../images/pressure.png';
import WindSpeed from '../../../images/wind.png';

const currentweather = (props) => {

  if(props.error===200){
    console.log(props);
    return(
      <div>
        <div className="main-block-city">
        <div className="city"><span>{props.city}</span></div>
        <div className="location">Latitude=<span>{props.latitude} </span> Longitude=<span>{props.longitude}</span></div>
        <div className="country"><span>Country: </span><span>{props.country}</span></div>
        </div>
        <div className="main-block-temp">
        <div className="col33"><span className="temp">{props.temperature}<span className="degree">o</span><span className="celsius">C</span></span></div>
        <div className="col66">
        <div className="col66-50"><span className="description">{props.description}</span></div>
        <div className="col66-50">
        <div className="others"><span><img src={Humidity}/> Humidity: </span><span>{props.humidity}%</span></div><hr/>
        <div className="others"><span><img src={Pressure}/> Pressure: </span><span>{props.pressure}mb</span></div><hr/>
        <div className="others"><span><img src={WindSpeed}/> Wind Speed: </span><span>{props.windspeed}km/hr</span></div>
        </div>
        </div>
        </div>
      </div>
    )
  }
  else{
    return <div className="main-block-error">Please Enter a valid City or Country</div>
  }
}

export default currentweather;
