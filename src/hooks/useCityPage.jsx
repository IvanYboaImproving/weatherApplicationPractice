import { useParams } from "react-router-dom";
import { useEffect, useState, useDebugValue } from "react";
import axios from "axios";
import { getForecastUrl } from '../utils/urls';
import getChartData from "../utils/transform/getChartData";
import getForecastItemList from "../utils/transform/getForecastItemList";

const useCityPage = () => {
    const [chartData, setChartData] = useState(null)
    const [forecastItemList, setForecastItemList] = useState(null)
    const {city, lat, lon} = useParams();
  
    useDebugValue(`useCityPage ${city}`)
    useEffect(() => {
      const getForecast = async () => {
        const url = getForecastUrl({lat, lon});
          try {
            const { data } = await axios.get(url)

            const dataAux = getChartData(data);
  
            setChartData(dataAux)

            const forecastItemListAux = getForecastItemList(data)
            setForecastItemList(forecastItemListAux)
          } catch (error) {
            console.log("Error: ",error);
          }
      }
  
      getForecast();
  
    }, [city, lat, lon])
    return { city, lat, lon, chartData, forecastItemList }
  }

  export default useCityPage;

  // const dataExa = [
//   {
//       "dayHour": "Jue 18",
//       "min": 14,
//       "max": 22,
//   },
//   {
//       "dayHour": "Vie 06",
//       "min": 18,
//       "max": 27,
//   },
//   {
//       "dayHour": "Vie 12",
//       "min": 18,
//       "max": 28,
//   },
//   {
//       "dayHour": "Vie 18",
//       "min": 18,
//       "max": 25,
//   },
//   {
//       "dayHour": "Sab 06",
//       "min": 15,
//       "max": 22,
//   },
//   {
//       "dayHour": "Sab 12",
//       "min": 12,
//       "max": 19,
//   }
// ];

// const forecastItemListExa = [
//   {weekDay: "Monday", hour:6, state: "clear", temperature: 29},
//   {weekDay: "Tuesday", hour:7, state: "snow", temperature: 2},
//   {weekDay: "Wednesday", hour:2, state: "rain", temperature: 13},
//   {weekDay: "Thursday", hour:8, state: "drizzle", temperature: 12},
//   {weekDay: "Friday", hour:1, state: "clouds", temperature: 15},
//   {weekDay: "Saturday", hour:11, state: "snow", temperature: 1},
// ];
