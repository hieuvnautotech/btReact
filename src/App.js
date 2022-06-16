import React from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard/component';

function App() {
  return (
    <div className="App">
      <WeatherCard Temp='30'/>
    </div>
  );
}

export default App;
