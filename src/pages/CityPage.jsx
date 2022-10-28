import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import CityInfo from "../components/cityInfo/CityInfo";
import ForecastChart from "../components/forecastChart/ForecastChart";
import Weather from "../components/weather/Weather";
import WeatherDetails from "../components/weatherDetails/WeatherDetails";
import Forecast from "../components/forecast/Forecast";

const dataExa = [
  {
      "dayHour": "Jue 18",
      "min": 14,
      "max": 22,
  },
  {
      "dayHour": "Vie 06",
      "min": 18,
      "max": 27,
  },
  {
      "dayHour": "Vie 12",
      "min": 18,
      "max": 28,
  },
  {
      "dayHour": "Vie 18",
      "min": 18,
      "max": 25,
  },
  {
      "dayHour": "Sab 06",
      "min": 15,
      "max": 22,
  },
  {
      "dayHour": "Sab 12",
      "min": 12,
      "max": 19,
  }
];

const forecastItemListExa = [
  {weekDay: "Monday", hour:6, state: "sunny", temperature: 29},
  {weekDay: "Tuesday", hour:7, state: "snow", temperature: 2},
  {weekDay: "Wednesday", hour:2, state: "rain", temperature: 13},
  {weekDay: "Thursday", hour:8, state: "fog", temperature: 12},
  {weekDay: "Friday", hour:1, state: "cloud", temperature: 15},
  {weekDay: "Saturday", hour:11, state: "snow", temperature: 1},
  {weekDay: "Sunday", hour:9, state: "rain", temperature: 25},
];

const city = "Guadalajara";
const country = "México";
const state = "sunny";
const temperature = 24;
const humidity = 70;
const wind = 10;
const data = dataExa;
const forecastItemList = forecastItemListExa;

const CityPage = () => {
  return (
    <Grid container justify="center" spacing={2}>
        <Grid item container justifyContent={"center"} alignItems={"flex-end"} xs={12}>
          <CityInfo city={city} country={country}/>
        </Grid>
        <Grid container item xs={12} justifyContent={"center"}>
            <Weather state={state} temperature={temperature}/>
            <WeatherDetails humidity={humidity} wind={wind}/>
        </Grid>
          <Grid item lg={7} md={8} sm={12}>
            <ForecastChart data={data}/>
          </Grid>    
        <Grid>    
            <Forecast forecastItemList={forecastItemList}/>
        </Grid>
        <Grid item sm={12} justifyItems={"center"}><Link to={"/main"}>Go to main page</Link></Grid>
    </Grid>
  )
};

export default CityPage;