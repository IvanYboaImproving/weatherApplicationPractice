import { toCelsius } from '../utils';

const getAllWeather = (response, city, country, lat, lon) => {
    const { data } = response
    const temperature = toCelsius(data.main.temp)
    const humidity = data.main.humidity
    const wind = data.wind.speed
    const state = data.weather[0].main.toLowerCase();
    const propName = `${city}-${country}-${lat}-${lon}` // Example [Guadalajara, México, "20.676655020772536", "-103.34701838047076"]
    const propValue = { temperature,humidity, wind, state } // Example: { temperature: 23, state: "clouds" }
    
    return ({ [propName]: propValue })
}

export default getAllWeather;