import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";
import CityPage from "./pages/CityPage";
import NotFound from "./pages/NotFound";
import Grid from "@mui/material/Grid";
import { Routes,
    Route,
    } from "react-router-dom";

const App = () => {
  return (
    <Grid container justifyContent={"center"} direction={"row"}>
        <Grid item xs={12} sm={11} md={10} lg={8}>
                <Routes>
                    <Route exact path={"/"} element={<WelcomePage />}/>
                    <Route exact path={"/main"} element={<MainPage />}/>
                    <Route exact path={"/city"} element={<CityPage />}/>
                    <Route path={"*"} element={<NotFound />}/>
                </Routes>
        </Grid>
    </Grid>
  )
};

export default App;