import PropTypes from 'prop-types';
import CityInfo from '../cityInfo/CityInfo';
import Weather from '../weather/Weather';
import Grid from '@mui/material/Grid'

const renderCityCountry = eventOnClickCity => cityCountry => {
    const { city, country } = cityCountry;
    return (
        <li key={city} onClick={eventOnClickCity}>
            <Grid container
                justify={"center"}
                alignItems={"center"}
                >
                <Grid item md={8} xs={12}>
                    <CityInfo city={city} country={country}/>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Weather temperature={21} state={"sunny"}/>
                </Grid>
            </Grid>
        </li>
    )
};

const CityList = ({ cities, onClickCity }) => {
  return (
    <ul>
        {
            cities.map(cityCountry => renderCityCountry(onClickCity)(cityCountry))
        }
    </ul>
  )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList