import Forecast from './Forecast';

export default {
    title: "Forecast",
    component: Forecast
};

const forecastItemList = [
    {weekDay: "Monday", hour:6, state: "sunny", temperature: 29},
    {weekDay: "Tuesday", hour:7, state: "snow", temperature: 2},
    {weekDay: "Wednesday", hour:2, state: "rain", temperature: 13},
    {weekDay: "Thursday", hour:8, state: "fog", temperature: 12},
    {weekDay: "Friday", hour:1, state: "cloud", temperature: 15},
    {weekDay: "Saturday", hour:11, state: "snow", temperature: 1},
    {weekDay: "Sunday", hour:9, state: "rain", temperature: 25},
];

export const ForecastExample = () => {
    return(<Forecast forecastItemList={forecastItemList}></Forecast>)
};