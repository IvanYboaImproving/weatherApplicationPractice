import CityList from "./CityList";
import { action } from "@storybook/addon-actions";

export default {
    title: "CityList",
    component: CityList
};

const cities = [
    { city: "Guadalajara", country: "México" },
    { city: "Monterrey", country: "México" },
    { city: "CDMX", country: "México" },
    { city: "Buenos Aires", country: "Argentina" },
    { city: "Bogotá", country: "Colombia" },
    { city: "Lima", country: "Peru" }
];

export const CityListExample = () => <CityList cities={cities} onClickCity={action("click on cityy")}/>;