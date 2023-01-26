/* eslint-disable no-undef */
import React from 'react';
import "../styles/Weather.css";

const Weather = () => {
    
    return (
        <>
            <div className="Weather">
                <div className="Weather__info">
                    {/* <img
                        className="Weather__icon"
                        src={
                            "https://openweathermap.org/img/wn/" +
                            weatherInfo.current.weather[0].icon +
                            ".png"
                        }
                        alt={weatherInfo.current.weather[0].main}
                    /> */}
                    <ul className="Weather__list">
                        <li className="list__temperature">
                        {(Number(temp) - 273).toFixed(2)}
                            <sup className="list__temperature-symbol">°C</sup>
                        </li>
                        <li> Humidity: 999 % </li>
                        <li>
                            {" "}
                            Wind: 999 km/h{" "}
                        </li>
                    </ul>
                </div>
                <div className="Weather__other-info">
                    <h2 className="other-info__city">
                        {staticDisplay.name} {" "}
                        {country}
                    </h2>
                    <h3 className="other-info__clouds">999</h3>
                    <h3 className="other-info__clouds">
                        lorem
                    </h3>
                </div>
            </div>
        </>
    )
}

export default Weather