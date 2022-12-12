import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import ForecastItem from '../forecastItem/ForecastItem';


const renderForcastItem = forecast => {
    const { weekDay, hour, state, temperature } = forecast
    return (
        <Grid data-testid={"forecast-item-container"} item key={`${weekDay}${hour}`}>
            <ForecastItem 
                weekDay={weekDay} 
                hour={hour} 
                state={state} 
                temperature={temperature}>

            </ForecastItem>
        </Grid>
    )
};

const Forecast = ({ forecastItemList }) => {
  return (
    <Grid container justifyContent={"space-around"} alignItems={"center"}>
        {
        forecastItemList.map(forecast => renderForcastItem(forecast))
        } 
    </Grid>
  )
};

Forecast.propTypes = {
    forecastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.string.isRequired, 
        state: PropTypes.oneOf(["clouds","clear","rain","snow", "drizzle", "thunderstorm"]).isRequired,
        temperature: PropTypes.number.isRequired,
    })).isRequired,
};

export default Forecast