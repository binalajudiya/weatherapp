import './App.css';
import TimeandLocation from './components/TimeandLocation';
import {getWeatherData,getFormattedWeatherData} from './services/weatherServices';
import { useState, useEffect } from 'react';
import TemperatureandDetails from './components/TemperatureandDetails';
import Forecast from './components/Forecast';

function App() {

  const [weather, setWeather] = useState("");

  useEffect (() => {

    const fetchMaster =  async () => {
      const weather = await getFormattedWeatherData({q: "Mumbai"});
      
      //console.log(weather);
      setWeather(weather);
    }
    
    fetchMaster();
  }, []);
  
  return (
    <div className="container mx-auto">
      <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-500 to-blue-800 h-fit shadow-xl shadow-gray-400 '>
        {
          weather &&
          <div>
          <TimeandLocation weather={weather}/>
          <TemperatureandDetails weather={weather}/>
          <Forecast />
          </div>
        }
      </div>
    </div>
  );
}

export default App;
