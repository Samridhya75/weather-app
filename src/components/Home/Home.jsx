import React, { useState } from 'react';
import axios from 'axios';
import '../Home/styles.css'
import { motion } from 'framer-motion';

const Home = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        try {
            const apiKey = 'dae9f8497d09e2fa8106ce64a0425dfb';
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},in&APPID=${apiKey}`;
            const currentWeatherResponse = await axios.get(weatherUrl);
            setWeather(currentWeatherResponse.data);

            const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},in&appid=${apiKey}`;
            const forecastResponse = await axios.get(forecastUrl);
            setForecast(forecastResponse.data);
        } catch (error) {
            setError(error);
        }
    };

    const handleSearch = async () => {
        if (!city) {
            setError("Please enter a city name.");
            return;
        }
        await fetchWeather();
    };

    const handleChange = (event) => {
        setCity(event.target.value);
    }

    return (
        <>

            <div className="search-container">
                <div className="inputWrapper">
                    <motion.input whileHover={{ scale: 1.05 }} whileFocus={{ scale: 1.1 }} value={city} onChange={handleChange} placeholder='Search...' className='inputField' />
                    <button className="searchButton" onClick={handleSearch}>Search</button>
                </div>
            </div>
            {error && <p>{error.message}</p>}

            {weather && (
                <div className='main-container'>
                    <div className="weatherContainer">
                        <p className='current-title'>Current Weather</p>
                        <span className='city'>City: {weather.name}</span>
                        <span className='temperature'>{Math.round(weather.main.temp - 273.15)}℃</span>
                        <span className='weather-type'>{weather.weather.main}</span>
                        <img src={`./icons/${weather.weather[0].icon}.png`} alt="icon" className='weather-icon' />
                        <span className='description'>{weather.weather[0].description}</span>
                    </div>
                    <div className="weatherDetails">
                        <p className='current-title'>Current Weather Details</p>
                        <div className="parameter-row">
                            <p className='parameter-label'>Max Temp-</p>
                            <p className='parameter-value'>{Math.round(weather.main.temp_max - 273.15)}℃</p>
                        </div>
                        <div className='parameter-row'>    
                            <p className='parameter-label'>Min Temp-</p>
                            <p className='parameter-label'>{Math.round(weather.main.temp_min - 273.15)}℃</p>
                        </div>
                        <div className="parameter-row">
                            <span className='parameter-label'>Wind</span>
                            <span className='parameter-value'>{weather.wind.speed} m/s</span>
                        </div>
                        <div className="parameter-row">
                            <span className='parameter-label'>Humidity</span>
                            <span className='parameter-value'>{weather.main.humidity}%</span>
                        </div>
                        <div className="parameter-row">
                            <span className='parameter-label'>Pressure</span>
                            <span className='parameter-value'>{weather.main.pressure} hPa</span>
                        </div>
                        <div className="parameter-row">
                            <span className='parameter-label'>Feels like</span>
                            <span className='parameter-value'>{Math.round(weather.main.feels_like - 273.15)}℃</span>
                        </div>
                    </div>
                </div>
            )}
            
            {forecast && (
                <div className="forecastContainer">
                    <p className='forecast-title'>Forecast for every 3hrs</p>
                    <div className="weekdays-column">
                        <span className="weekday">Date: {forecast.list[0].dt_txt}</span><br></br>
                        <span className="parameter">Temperature: {Math.round(forecast.list[0].main.temp - 273.15)}℃</span><br></br>
                        <span className="parameter">Weather: {forecast.list[0].weather.description}</span><br></br>
                        <span className="parameter">Humidity: {forecast.list[0].main.humidity} %</span><br></br>
                        <span className="parameter">Pressure: {forecast.list[0].main.pressure} hPa</span><br></br>
                    </div>
                    <div className="weekdays-column">
                        <span className="weekday">Date: {forecast.list[1].dt_txt}</span><br></br>
                        <span className="parameter">Temperature: {Math.round(forecast.list[1].main.temp - 273.15)}℃</span><br></br>
                        <span className="parameter">Weather: {forecast.list[1].weather.description}</span><br></br>
                        <span className="parameter">Humidity: {forecast.list[1].main.humidity} %</span><br></br>
                        <span className="parameter">Pressure: {forecast.list[1].main.pressure} hPa</span><br></br>
                    </div>
                    <div className="weekdays-column">
                        <span className="weekday">Date: {forecast.list[2].dt_txt}</span><br></br>
                        <span className="parameter">Temperature: {Math.round(forecast.list[2].main.temp - 273.15)}℃</span><br></br>
                        <span className="parameter">Weather: {forecast.list[2].weather.description}</span><br></br>
                        <span className="parameter">Humidity: {forecast.list[2].main.humidity} %</span><br></br>
                        <span className="parameter">Pressure: {forecast.list[2].main.pressure} hPa</span><br></br>
                    </div>
                    <div className="weekdays-column">
                        <span className="weekday">Date: {forecast.list[3].dt_txt}</span><br></br>
                        <span className="parameter">Temperature: {Math.round(forecast.list[3].main.temp - 273.15)}℃</span><br></br>
                        <span className="parameter">Weather: {forecast.list[3].weather.description}</span><br></br>
                        <span className="parameter">Humidity: {forecast.list[3].main.humidity} %</span><br></br>
                        <span className="parameter">Pressure: {forecast.list[3].main.pressure} hPa</span><br></br>
                    </div>
                    <div className="weekdays-column">
                        <span className="weekday">Date: {forecast.list[4].dt_txt}</span><br></br>
                        <span className="parameter">Temperature: {Math.round(forecast.list[4].main.temp - 273.15)}℃</span><br></br>
                        <span className="parameter">Weather: {forecast.list[4].weather.description}</span><br></br>
                        <span className="parameter">Humidity: {forecast.list[4].main.humidity} %</span><br></br>
                        <span className="parameter">Pressure: {forecast.list[4].main.pressure} hPa</span><br></br>
                    </div>
                    
                    {/* <div className="weekdays-column">
                    <span className="weekday">Saturday</span><br></br>
                    <span className="parameter">Temperature: ℃</span><br></br>
                    <span className="parameter">Weather:</span><br></br>
                    <span className="parameter">Humidity: %</span><br></br>
                    <span className="parameter">Pressure: hPa</span><br></br>
                    </div>
                    <div className="weekdays-column">
                    <span className="weekday">Sunday</span><br></br>
                    <span className="parameter">Temperature: ℃</span><br></br>
                    <span className="parameter">Weather:</span><br></br>
                    <span className="parameter">Humidity: %</span><br></br>
                    <span className="parameter">Pressure: hPa</span><br></br>
                    </div> */}
                </div>
            )}
            <div className="details">
                <div className="icon">
                    <img src="/weather-icon.png" alt="weather-icon" />
                    <p>Weather App to find current weather and 3hrs of forecast</p>
                    <p>Powered by <a href="https://openweathermap.org/">OpenWeatherMap</a></p>
                    <p>Made by Samridhya Ghosh</p>
                </div>
            </div>
        </>
    )
}

export default Home;