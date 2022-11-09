import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CityList from "../components/cityList/CityList";
import AppFrame from "../components/appFrame/AppFrame";
import Paper from "@mui/material/Paper";

const cities = [
  { city: "Guadalajara", country: "México" },
  { city: "Monterrey", country: "México" },
  { city: "CDMX", country: "México" },
  { city: "Buenos Aires", country: "Argentina" },
  { city: "Bogotá", country: "Colombia" },
  { city: "Lima", country: "Peru" }
];

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <AppFrame>
      <Paper elevation={3}>
        <Typography variant={"h2"}>Cities list</Typography>
        <CityList cities={cities} onClickCity={()=>{navigate("/city")}}/>
      </Paper>
      <div><Link to={"/"}><Typography>Go to landing page</Typography></Link></div>
    </AppFrame>
  )
};

export default MainPage;