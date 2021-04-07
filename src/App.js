import React, { useEffect, useState } from "react";
import Weather from "./components/Weather";

function App() {
  const [temperature, setTemperature] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [weatherType, setWeatherType] = useState();
  const [clouds, setClouds] = useState();
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  const [error, setError] = useState();

  const API_KEY = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    async function fetchData() {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`
      );
      const data = await api_call.json();

      setTemperature(data.main.temp.toFixed(0));
      setCity(data.name);
      setCountry(data.sys.country);
      setWeatherType(data.weather[0].main);
      setClouds(data.clouds.all);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed.toFixed());
    }
    fetchData();
  }, []);

  const getWeather = async (e) => {
    e.preventDefault();
    try {
      const city = e.target.elements.city.value;
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_call.json();

      setTemperature(data.main.temp.toFixed(0));
      setCity(data.name);
      setCountry(data.sys.country);
      setWeatherType(data.weather[0].main);
      setClouds(data.clouds.all);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed.toFixed());
      setError("");
    } catch (e) {
      setError("City not found");
    }
  };

  return (
    <div>
      <Weather
        getWeather={getWeather}
        temperature={temperature}
        city={city}
        country={country}
        weatherType={weatherType}
        clouds={clouds}
        humidity={humidity}
        wind={wind}
        error={error}
      />
    </div>
  );
}

export default App;
