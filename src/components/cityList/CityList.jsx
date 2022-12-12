import PropTypes from 'prop-types';
import CityInfo from '../cityInfo/CityInfo';
import Weather from '../weather/Weather';
import useCityList from '../../hooks/useCityList';
import Grid from '@mui/material/Grid';
import List from "@mui/material/List";
import Alert from '@mui/material/Alert';
import ListItem from '@mui/material/ListItem';


const renderCityCountry = eventOnClickCity => (cityCountry, weather) => {
    const { city, country, lat, lon } = cityCountry;
    // const { temperature, state } = weather;
    return (
        <ListItem key={city} onClick={() => eventOnClickCity(city, lat, lon)
        } button>
            <Grid container
                justifyContent={"center"}
                alignItems={"center"}
                >
                <Grid item md={9} sm={8} xs={12}>
                    <CityInfo city={city} country={country}/>
                </Grid>
                <Grid item md={3} sm={4} xs={12}>
                        <Weather 
                        temperature={weather && weather.temperature} 
                        state={weather && weather.state} />
                </Grid>
            </Grid>
        </ListItem>
    )
};


const CityList = ({ cities, onClickCity }) => {
    
    const { allWeather, error, setError } = useCityList(cities)

  return (
    <div>
        {
            error && <Alert onClose={() => setError(null)} severity={"error"}>{error}</Alert>
        }
        <List>
            {
                cities.map(cityCountry => renderCityCountry(onClickCity)(cityCountry,
                    allWeather[`${cityCountry.city}-${cityCountry.country}-${cityCountry.lat}-${cityCountry.lon}`]))
            }
        </List>
    </div>
    
  )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            lat: PropTypes.string.isRequired,
            lon: PropTypes.string.isRequired
        })
    ).isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList;