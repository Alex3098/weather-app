import React, { useState, useEffect } from "react";
import style from "./Weather.module.css";
import sunny from "../img/sunny.svg";
import rain from "../img/rain.svg";
import cloudy from "../img/cloudy.svg";
import snow from "../img/snow.svg";
import thunder from "../img/thunder.svg";
import sunnyBackground from "../img/sunny-background.jpg";
import rainyBackground from "../img/rainy-background.jpg";
import cloudyBackground from "../img/cloudy-background.jpg";
import snowBackground from "../img/snow-background.jpg";
import thunderBackground from "../img/thunder-background.jpg";
import loupe from "../img/loupe.svg";

export default function Weather(props) {
  const [weatherPhoto, setWeatherPhoto] = useState();
  const [weatherIcon, setWeatherIcon] = useState();
  useEffect(() => {
    if (props.weatherType === "Clear") {
      setWeatherPhoto(sunnyBackground);
      setWeatherIcon(sunny);
    }
    if (props.weatherType === "Rain" || props.weatherType === "Drizzle") {
      setWeatherPhoto(rainyBackground);
      setWeatherIcon(rain);
    }
    if (props.weatherType === "Clouds" || props.weatherType === "Atmosphere") {
      setWeatherPhoto(cloudyBackground);
      setWeatherIcon(cloudy);
    }
    if (props.weatherType === "Snow") {
      setWeatherPhoto(snowBackground);
      setWeatherIcon(snow);
    }
    if (props.weatherType === "Thunderstorm") {
      setWeatherPhoto(thunderBackground);
      setWeatherIcon(thunder);
    }
  });
  const getCurrentDate = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date}, ${month}, ${year}`;
  };
  return (
    <div className={style.container}>
      <div
        className={style.bg_image}
        style={{ backgroundImage: `url(${weatherPhoto})` }}
      ></div>
      <div className={style.main_container}>
        <div
          className={style.main_info}
          style={{ backgroundImage: `url(${weatherPhoto})` }}
        >
          <div className={style.logo}>the.weather</div>
          <div className={style.main_info_block_text}>
            <div className={style.temp}>{props.temperature}°</div>
            <div className={style.city_time_block}>
              <div className={style.city}>
                {props.city},{props.country}
              </div>
              <div className={style.time}>{getCurrentDate(new Date())}</div>
            </div>
            <div className={style.type_block}>
              <div className={style.type_icon}>
                <img src={weatherIcon} alt="sunny" />
              </div>
              <div className={style.type_text}>{props.weatherType}</div>
            </div>
          </div>
        </div>

        <div className={style.other_info}>
          <div className={style.other_info_wrapper}>
            <div className={style.search_block}>
              <form onSubmit={props.getWeather}>
                <input type="text" name="city" placeholder="Another location" />
                <button>
                  <img src={loupe} alt="Loupe icon" />
                </button>
              </form>
            </div>
            <div className={style.error_city}>{props.error}</div>

            <h3>Weather Details</h3>
            <div className={style.cloudy_info}>
              <h4>Cloudy</h4>
              <p>{props.clouds}%</p>
            </div>
            <div className={style.humidity_info}>
              <h4>Humidity</h4>
              <p>{props.humidity}%</p>
            </div>
            <div className={style.wind_info}>
              <h4>Wind</h4>
              <p>{props.wind}km/h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
