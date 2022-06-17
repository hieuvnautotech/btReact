import React, { useEffect, useState } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  const [query, setQuery] = useState("Saigon, VN");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  // const [city, setCity] = useState("");
  // const [temp, setTemp] = useState("");
  // const [condition, setCondition] = useState("");
  // const [country, setCountry] = useState("");

  const data = async (q) => {
    const apiRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=9d10d17a24a82c6b97e648d796d12b46`
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    data(query).then((res) => {
      // console.log("the feels like is" + res.main.feels_like);
      // console.log("the temp is" + res.weather[0].main);
      // setTemp(res.main.temp);
      // setCondition(res.weather[0].main);
      // setCity(res.name);
      // setCountry(res.sys.country);
      setWeather({
        temp: res.main.temp,
        condition: res.weather[0].main,
        city: res.name,
        country: res.sys.country,
      });
    });
  };


  
  useEffect(() => {
    data(query).then((res) => {
      setWeather({
        temp: res.main.temp,
        condition: res.weather[0].main,
        city: res.name,
        country: res.sys.country,
      });
    });
  }, []);

  return (
    <div className="App">
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
      />
      <form>
        <input value={query} onChange={(e) => setQuery(e.target.value)}></input>
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
}

export default App;
