

const appid = "a341a506198897ab34f8140d1fef5a72";

export const getWeatherUrl = ({ lat, lon }) => (
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}`
    );

export const getForecastUrl = ({ lat, lon }) => (
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${appid}`
)