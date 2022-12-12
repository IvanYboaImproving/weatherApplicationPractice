import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { IconContext } from 'react-icons';
import Grid from "@mui/material/Grid";
import Skeleton from '@mui/material/Skeleton';
import IconState from "../iconState/IconState";

const Weather = ({ temperature, state }) => {
  return (
    <Grid container item
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={1}>
      <IconContext.Provider value={{ size: '6em' }}>
        {
          state ?
          <IconState state={state}/>
          :
          <Skeleton variant={"circle"} height={80} width={80} ></Skeleton>
        }
      </IconContext.Provider>
        {
          temperature ?
          <Typography display={"inline"} variant={'h2'}>{temperature}°C</Typography>
          :
          <Skeleton variant={"rect"} height={80} width={80} ></Skeleton>
        }
    </Grid>
  )
}

// Weather.defaultProps = {
//   temperature: 24,
//   state: "clear"
// }

Weather.propTypes = {
    temperature: PropTypes.number,
    state: PropTypes.oneOf(["clouds","clear","rain","snow", "drizzle", "thunderstorm", "haze"])
}

export default Weather