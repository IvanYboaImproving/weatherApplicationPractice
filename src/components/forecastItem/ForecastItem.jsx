import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { IconContext } from 'react-icons';
import IconState from '../iconState/IconState';

  
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
                        <IconState state={state}/>
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
    hour: PropTypes.string.isRequired, 
    state: PropTypes.oneOf(["clouds","clear","rain","snow", "drizzle", "thunderstorm"]).isRequired,
    temperature: PropTypes.number.isRequired,
};

export default ForecastItem