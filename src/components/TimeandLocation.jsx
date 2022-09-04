import React from 'react';
import { formatToLocalTime } from "../services/weatherServices";

function TimeandLocation({
  weather:{
    country,
    dt,
    name,
    timezone
  }
}) {
  return (
    <div>
      <div className='flex justify-center items-center flex-col py-3'>
        <p className='text-white text-base'>{formatToLocalTime(dt,timezone)}</p>
        <h3 className='text-white text-2xl py-4'>{`${name}, ${country}`}</h3>
      </div>
    </div>
  )
}

export default TimeandLocation