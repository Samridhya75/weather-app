import React from 'react';
import '../Weather/styles.css'

const Weather = () => {
    return(
        <>
        <div className='main-container'>
            <div className="weatherContainer">
                <span className='city'>Kolkata</span>
                <span className='temperature'>23℃</span>
                <span className='weather-type'>Sunny</span>
                <img src="/icons/01d.png" alt="icon" className='weather-icon' />
            </div>
            <div className="weatherDetails">
                <div className="parameter-row">
                    <span className='parameter-label'>Feels like</span>
                    <span className='parameter-value'>28℃</span>
                </div>
                <div className="parameter-row">
                    <span className='parameter-label'>Wind</span>
                    <span className='parameter-value'>2 m/s</span>
                </div>
                <div className="parameter-row">
                    <span className='parameter-label'>Humidity</span>
                    <span className='parameter-value'>70%</span>
                </div>
                <div className="parameter-row">
                    <span className='parameter-label'>Pressure</span>
                    <span className='parameter-value'>1 atm</span>
                </div>
                <div className="parameter-row">
                    <span className='parameter-label'>Air Quality</span>
                    <span className='parameter-value'>150</span>
                </div>
            </div>
        </div>
        </>
    )
}


export default Weather;