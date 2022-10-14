import ForecastItem from "./ForecastItem";

export default {
    title: "Forecast Item",
    component: ForecastItem
};

export const SunnyMondayExample = () => {
    return <ForecastItem weekDay={"Monday"} hour={4} state={"sunny"} temperature={28}/>
};