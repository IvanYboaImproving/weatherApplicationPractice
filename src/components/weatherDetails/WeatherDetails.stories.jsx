import WeatherDetails from "./WeatherDetails";

export default {
    title: "Weather details",
    component: WeatherDetails
};

export const WeatherDetailsExample = () =>{
    return <WeatherDetails humidity={15} wind={20}/>
};