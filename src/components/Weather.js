import React, { useState } from "react";
import style from "./Weather.module.css";
import sunny from "../img/sunny.svg";
import rain from "../img/rain.svg";
import cloudy from "../img/cloudy.svg";
import sunnyBackground from "../img/sunny-background.jpg";
import rainyBackground from "../img/rainy-background.jpg";
import cloudyBackground from "../img/cloudy-background.jpg";

export default function Weather() {
  const [weatherPhoto, setWeatherPhoto] = useState(rainyBackground);
  const [weatherIcon, setWeatherIcon] = useState(sunny);

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
            <div className={style.temp}>26°</div>
            <div className={style.city_time_block}>
              <div className={style.city}>London</div>
              <div className={style.time}>10:36 - Tuesday, 22 Oct '19</div>
            </div>
            <div className={style.type_block}>
              <div className={style.type_icon}>
                <img src={weatherIcon} alt="sunny" />
              </div>
              <div className={style.type_text}>Sunny</div>
            </div>
          </div>
        </div>

        <div className={style.other_info}>
          <div className={style.other_info_wrapper}>
            <div className={style.search_block}>
              <input type="text" placeholder="Another location" />
              <button>Search</button>
            </div>

            <ul>
              <li>Birmingham</li>
              <li>Manchester</li>
              <li>New York</li>
              <li>California</li>
            </ul>

            {/* <hr /> */}

            <h3>Weather Details</h3>
            <div className={style.cloudy_info}>
              <h4>Cloudy</h4>
              <p>12%</p>
            </div>
            <div className={style.humidity_info}>
              <h4>Humidity</h4>
              <p>78%</p>
            </div>
            <div className={style.wind_info}>
              <h4>Wind</h4>
              <p>1km/h</p>
            </div>
            <div className={style.rain_info}>
              <h4>Rain</h4>
              <p>0mm</p>
            </div>

            {/* <hr /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
