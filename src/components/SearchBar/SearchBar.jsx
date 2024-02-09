import { React, useEffect, useState } from 'react';
import '../SearchBar/styles.css'
import { motion } from 'framer-motion';
import axios from 'axios';

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        try {
            const apiKey = 'dae9f8497d09e2fa8106ce64a0425dfb';
            const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${search},in&APPID=${apiKey}`;
            const currentWeatherResponse = await axios.get(weatherUrl);
            console.log(currentWeatherResponse.data)

            const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${search},in&appid=${apiKey}`;
            const forecastResponse = await axios.get(forecastUrl);
            console.log(forecastResponse.data)
        } catch (error) {
            setError(error);
        }
    };
    if (search) {
        fetchWeather();
    }

    const handleSearch = async () => {
        if (!search) {
            setError("Please enter a city name.");
            return;
        }
        await fetchWeather();

    };
    return (
        <>
            <div className="container">
                <div className="inputWrapper">
                    <motion.input whileHover={{ scale: 1.05 }} whileFocus={{ scale: 1.1 }} value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search...' className='inputField' />
                    <button className="searchButton" onClick={handleSearch}>Search</button>
                </div>
            </div>
        </>
    )
}


export default SearchBar;