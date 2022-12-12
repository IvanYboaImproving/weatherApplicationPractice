import { useMemo } from "react";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import CityInfo from "../components/cityInfo/CityInfo";
import AppFrame from "../components/appFrame/AppFrame";
import ForecastChart from "../components/forecastChart/ForecastChart";
import Weather from "../components/weather/Weather";
import WeatherDetails from "../components/weatherDetails/WeatherDetails";
import Forecast from "../components/forecast/Forecast";
import useCityPage from "../hooks/useCityPage";
import useCityList from "../hooks/useCityList";
import { getCityCoords } from "../utils/utils";


const CityPage = () => {

  const { city, country, lat, lon, chartData, forecastItemList } = useCityPage()

  const cities = useMemo(() => ([{city, country, lon, lat}]), [city, country,lon, lat]) //VIENE BIEN
  //console.log(cities);
  const { allWeather } = useCityList(cities)
  //console.log(allWeather);
  const weather = allWeather[getCityCoords(lat, lon)];
  // console.log(weather);

  const countryy = "México";
  const state = weather && weather.state;
  const temperature = weather && weather.temperature;
  const humidity = weather && weather.humidity;
  const wind = weather && weather.wind;
  // const data = dataExa;
  //const forecastItemList = forecastItemListExa;

  return (
    <AppFrame>
      <Grid container justifyContent={"space-around"} direction={"column"} spacing={2}>
        <Grid item container justifyContent={"center"} alignItems={"flex-end"}>
          <CityInfo city={city} country={countryy}/>
        </Grid>
        <Grid container item xs={12} justifyContent={"center"}>
            <Weather state={state} temperature={temperature}/>
            {
            humidity && wind && 
            <WeatherDetails humidity={humidity} wind={wind}/>
            }
        </Grid>
          <Grid item>
            {
              !chartData && !forecastItemList && <LinearProgress />
            }
          </Grid>
          <Grid item>
            {
              chartData && <ForecastChart data={chartData}/>
            }
          </Grid>    
        <Grid item>    
            {
              forecastItemList && <Forecast forecastItemList={forecastItemList}/>
            }
        </Grid>
      </Grid>
    </AppFrame>
    
  )
};

export default CityPage;