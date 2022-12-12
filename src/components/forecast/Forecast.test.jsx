import Forecast from './Forecast';
import { render } from '@testing-library/react';

const forecastItemList = [
    {weekDay: "Monday", hour:6, state: "clear", temperature: 29},
    {weekDay: "Tuesday", hour:7, state: "snow", temperature: 2},
    {weekDay: "Wednesday", hour:2, state: "rain", temperature: 13},
    {weekDay: "Thursday", hour:8, state: "drizzle", temperature: 12},
    {weekDay: "Friday", hour:1, state: "clouds", temperature: 15},
    {weekDay: "Saturday", hour:11, state: "snow", temperature: 1},
    {weekDay: "Sunday", hour:9, state: "rain", temperature: 25}
];


test("Render forecast", async () => {
    const {findAllByTestId} = render(<Forecast forecastItemList={forecastItemList}></Forecast>)

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const forecastItems = await findAllByTestId("forecast-item-container");

    expect(forecastItems).toHaveLength(7);
});