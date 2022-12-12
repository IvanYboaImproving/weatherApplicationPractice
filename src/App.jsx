import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";
import CityPage from "./pages/CityPage";
import NotFound from "./pages/NotFound";
import { Routes,
    Route,
    } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route exact path={"/"} element={<WelcomePage />}/>
      <Route path={"/main"} element={<MainPage />}/>
      <Route path={"/city/:city/:lat/:lon"} element={<CityPage />}/>
      <Route path={"*"} element={<NotFound />}/>
    </Routes>
  )
};

export default App;