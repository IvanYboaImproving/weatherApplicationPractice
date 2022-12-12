import ForecastItem from "./ForecastItem";
import { screen, render } from "@testing-library/react";

function renderedComponent () {
    return render(<ForecastItem data-testid={"forecast"} weekDay={"Monday"} hour={4} state={"sunny"} temperature={28}/>);
}

//On another time I will test that the "weekDay", it is actually a real week day
const validDays = ["Monday", "Tuesday", "Wendnesday", "Thursday", "Friday", "Saturday", "Sunday"];

// test('Render Forecast item', async () => {
//     //ARRANGE
//     renderedComponent();
//     //ACT
//     const weekDayElement = screen.findByText(/monday/);
//     //ASSERT
//     expect(weekDayElement).toBeInTheDocument;
// });