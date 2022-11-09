import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { WiCloud,
    WiDayCloudy,
    WiDayFog,
    WiDaySunny,
    WiRain,
    WiSnow } from 'react-icons/wi';
import { IconContext } from 'react-icons';

const stateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain,
    snow: WiSnow
  };
  
  const renderState = (state) => {
    let Icon = stateByName[state]
    return <Icon/>
  }

const ForecastItem = ({ weekDay, hour, state, temperature }) => {
  return (
    <Grid container direction={"column"} justifyItems={"center"} alignItems={"center"}>
                <Grid item>
                    <Typography>{weekDay}</Typography>
                </Grid>
                <Grid item>
                    <Typography>{hour}</Typography>
                </Grid>
                <Grid item>
                    <IconContext.Provider value={{ size: '4em' }}>
                        {renderState(state)}
                    </IconContext.Provider>
                </Grid>
                <Grid item>
                    <Typography>{temperature}°C</Typography>
                </Grid>

    </Grid>
  )
};

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired, 
    state: PropTypes.oneOf(["cloud","cloudy","fog","sunny","rain","snow"]).isRequired,
    temperature: PropTypes.number.isRequired,
};

export default ForecastItem