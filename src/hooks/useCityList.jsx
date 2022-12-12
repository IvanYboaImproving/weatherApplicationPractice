import { useState, useEffect } from 'react';
import axios from "axios";
import { getWeatherUrl } from '../utils/urls';
import getAllWeather from '../utils/transform/getAllWeather';

const useCityList = (cities) => {
    const [ allWeather, setAllWeather ] = useState({});
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const setWeather = async (city, country, lat, lon) => {
            const url = getWeatherUrl({lat, lon});
            try {
                const response = await axios.get(url)
                const allWeatherAux = getAllWeather(response, city, country, lat, lon)

                setAllWeather(allWeather => ({...allWeather, ...allWeatherAux }))
            } catch (error) {
                if (error.response) { //errors from server
                    setError("Error from service");
                } else if (error.request) { //error for not reaching server
                    setError("Not connecting with service, check internet connection");
                } else { //unknown errors
                    setError("FATAL ERROR, PLEASE CONTACT SUPPORT");
                }
            }
        }

        cities.forEach(({ city, country, lat, lon }) => {
            setWeather(city, country, lat, lon)
        });

    }, [cities])
    return {allWeather, error, setError}
}

export default useCityList;