import PropTypes from "prop-types";
import { WiDayCloudy,
    WiDaySunny,
    WiRain,
    WiSnow,
   WiRaindrop,
   WiThunderstorm,
   WiDayHaze } from 'react-icons/wi';

const stateByName = {
    clouds: WiDayCloudy,
    clear: WiDaySunny,
    rain: WiRain,
    snow: WiSnow,
    drizzle: WiRaindrop,
    thunderstorm: WiThunderstorm,
    haze: WiDayHaze
  };


const IconState = ({ state }) => {
  const StateByName = stateByName[state]
  return (
    <StateByName />
  )
};

IconState.propTypes = {
    state: PropTypes.oneOf(["clouds","clear","rain","snow", "drizzle", "thunderstorm", "haze"])
};

export default IconState;