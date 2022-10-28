import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { WiCloud,
         WiDayCloudy,
         WiDayFog,
         WiDaySunny,
         WiRain,
         WiSnow } from 'react-icons/wi';
import { IconContext } from 'react-icons';
import Grid from "@mui/material/Grid";

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

const Weather = ({ temperature, state }) => {
  return (
    <Grid container item
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={1}>
      <IconContext.Provider value={{ size: '6em' }}>
      {renderState(state)}
      </IconContext.Provider>
      <Typography display={"inline"} variant={'h2'}>{temperature}°C</Typography>
    </Grid>
  )
}

Weather.defaultProps = {
  temperature: 24,
  state: "sunny"
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(["cloud","cloudy","fog","sunny","rain","snow"])
}

export default Weather