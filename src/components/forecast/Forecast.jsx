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
    <Grid container justify={"center"} alignItems={"center"}>
        {
            forecastItemList.map(forecast => renderForcastItem(forecast))
        }
    </Grid>
  )
};

Forecast.propTypes = {
    forecastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired, 
        state: PropTypes.oneOf(["cloud","cloudy","fog","sunny","rain","snow"]).isRequired,
        temperature: PropTypes.number.isRequired,
    })).isRequired,
};

export default Forecast