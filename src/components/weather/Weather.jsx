import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
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

const Weather = ({ temperature, state }) => {
  return (
    <div>
      <IconContext.Provider value={{ size: '4em' }}>
      {renderState(state)}
      </IconContext.Provider>
      <Typography display={"inline"} variant={'h3'}>{temperature}°C</Typography>
    </div>
  )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(["cloud","cloudy","fog","sunny","rain","snow"])
}

export default Weather