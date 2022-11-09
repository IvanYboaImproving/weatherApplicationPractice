import AppFrame from "./AppFrame";
import { BrowserRouter as Router } from "react-router-dom";
import CityList from "../cityList/CityList";
import Paper from "@mui/material/Paper";
import { action } from "@storybook/addon-actions";

export default {
    title: "AppFrame",
    component: AppFrame
};

const cities = [
    { city: "Guadalajara", country: "México" },
    { city: "Monterrey", country: "México" },
    { city: "CDMX", country: "México" },
    { city: "Buenos Aires", country: "Argentina" },
    { city: "Bogotá", country: "Colombia" },
    { city: "Lima", country: "Peru" }
];

export const AppFrameExample = () => {
    return(
        <Router>
            <AppFrame>
                <Paper elevation={3}>
                    <CityList cities={cities} onClickCity={action("click on cityy")}/>
                </Paper>
            </AppFrame>
        </Router>
    )
};