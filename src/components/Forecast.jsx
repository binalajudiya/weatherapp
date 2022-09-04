import React from 'react';


function Forecast() {
  return (
    <div>
        <div className='flex items-center text-white pt-8'>
            <h4 className='font-medium mt-2 uppercase'>Hourly Forecast</h4>
        </div>
        <hr className='my-2'></hr>
        <div className='flex justify-between'>
            <div className='flex flex-col text-white text-sm items-center'>
                <p className='font-light'>04:30 PM</p>
                <img className='w-5 my-2' src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" />
                <p className=''>22°</p>
            </div>
            <div className='flex flex-col text-white text-sm items-center'>
                <p className='font-light'>04:30 PM</p>
                <img className='w-5 my-2' src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" />
                <p className=''>22°</p>
            </div>
            <div className='flex flex-col text-white text-sm items-center'>
                <p className='font-light'>04:30 PM</p>
                <img className='w-5 my-2' src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" />
                <p className=''>22°</p>
            </div>
            <div className='flex flex-col text-white text-sm items-center'>
                <p className='font-light'>04:30 PM</p>
                <img className='w-5 my-2' src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" />
                <p className=''>22°</p>
            </div>
            <div className='flex flex-col text-white text-sm items-center'>
                <p className='font-light'>04:30 PM</p>
                <img className='w-5 my-2' src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" />
                <p className=''>22°</p>
            </div>
        </div>
    </div>
  )
}

export default Forecast