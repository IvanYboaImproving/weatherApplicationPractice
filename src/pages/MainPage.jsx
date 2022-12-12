import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CityList from "../components/cityList/CityList";
import AppFrame from "../components/appFrame/AppFrame";
import Paper from "@mui/material/Paper";
import { getCities } from "../utils/serviceCities";

const MainPage = () => {
  const navigate = useNavigate();
  const onClickNavigate = (city, lat, lon) => {
    navigate(`/city/${city}/${lat}/${lon}`)
  }
  return (
    <AppFrame>
      <Paper elevation={3}>
        <Typography variant={"h2"}>Cities list</Typography>
        <CityList cities={getCities()} onClickCity={onClickNavigate}/>
      </Paper>
      <div><Link to={"/"}><Typography>Go to landing page</Typography></Link></div>
    </AppFrame>
  )
};

export default MainPage;