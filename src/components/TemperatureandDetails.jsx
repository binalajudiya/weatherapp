import React from 'react';
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
  } from "@iconscout/react-unicons";
  import { formatToLocalTime } from "../services/weatherServices";

function TemperatureandDetails({
    weather:{
        temp,
        feels_like,
        humidity,
        speed,
        sunset,
        sunrise,
        temp_min,
        temp_max,
        timezone
    }
}) {
  return (
    <div>
        <div className='flex justify-between items-center py-2'>
            <img className='w-10' src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" />
            <p className='text-white text-4xl'>{`${temp.toFixed()}°`}</p>
            <div className='flex flex-col items-center'>
                <div className='flex flex-row text-sm text-white mb-2'>
                    <UilTemperature size={18} className="mr-1"/>
                    Real fell:
                    <span className='ml-1 font-medium'> {`${feels_like.toFixed()}°`}</span>
                </div>
                <div className='flex flex-row text-white mb-2'>
                    <UilTear size={18} className="mr-1"/>
                    Humidity:
                    <span className='ml-1 font-medium'>{`${humidity.toFixed()}%`}</span>
                </div>
                <div className='flex flex-row text-white mb-2'>
                    <UilWind size={18} className="mr-1"/>
                    Wind:
                    <span className='ml-1 font-medium'> {`${speed.toFixed()} km/h`}</span>
                </div>
            </div>
        </div>
        <div className='flex flex-row items-center text-white justify-evenly text-sm'>
            <UilSun />
            <p className='font-light'> 
                Rise:
                <span className="font-medium mx-1">{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
            </p>
            <p className="font-light">|</p>
            <UilSun />
            <p className='font-light'> 
                Set:
                <span className="font-medium mx-1">{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
            </p>
            <p className="font-light">|</p>
            <UilSun />
            <p className='font-light'> 
                High:
                <span className="font-medium mx-1">{`${temp_max.toFixed()}°`}</span>
            </p>
            <p className="font-light">|</p>
            <UilSun />
            <p className='font-light'> 
                Low:
                <span className="font-medium mx-1">{`${temp_min.toFixed()}°`}</span>
            </p>
        </div>
    </div>
  )
}

export default TemperatureandDetails