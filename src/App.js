import React from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  const data = async () => {
    const apiRes = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=10.7780&lon=106.7253&units=metric&appid=9d10d17a24a82c6b97e648d796d12b46"
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };
  data().then((res) => {
    console.log(res.coord);
  });
  return (
    <div className="App">
      <WeatherCard temp={-30} condition="Clear" city="Sydney" country="AU" />
      <WeatherCard temp={10} condition="Clouds" city="Melbourne" country="AU" />
      <WeatherCard temp={30} condition="Tornado" city="London" country="EN" />
    </div>
  );
}

export default App;
