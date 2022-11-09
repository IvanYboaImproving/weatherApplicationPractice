import PropTypes from 'prop-types';
import CityInfo from '../cityInfo/CityInfo';
import Weather from '../weather/Weather';
import Grid from '@mui/material/Grid';
import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';


const renderCityCountry = eventOnClickCity => cityCountry => {
    const { city, country } = cityCountry;
    return (
        <ListItem key={city} onClick={eventOnClickCity} button>
            <Grid container
                justifyContent={"center"}
                alignItems={"center"}
                >
                <Grid item md={9} sm={8} xs={12}>
                    <CityInfo city={city} country={country}/>
                </Grid>
                <Grid item md={3} sm={4} xs={12}>
                    <Weather temperature={21} state={"sunny"}/>
                </Grid>
            </Grid>
        </ListItem>
    )
};

const CityList = ({ cities, onClickCity }) => {
  return (
    <List>
        {
            cities.map(cityCountry => renderCityCountry(onClickCity)(cityCountry))
        }
    </List>
  )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList