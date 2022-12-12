import convertUnits from "convert-units";

export const getCityCoords = (city, country, lat, lon) => `${city}-${lat}-${lon}`

export const toCelsius = (temp) => (
    Number(convertUnits(temp).from("K").to("C").toFixed(0))
    )