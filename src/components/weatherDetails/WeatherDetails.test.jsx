import WeatherDetails from './WeatherDetails';
import { render, screen } from '@testing-library/react';

function renderedComponent() {
    return render(<WeatherDetails humidity={22} wind={15}/>);
} 

test("wind details render", async () => {
    //ARRANGE
    //Render the component inside the test, so it can be tested
    renderedComponent();
    //ACT
    //THIS WILL RETURN AN ARRAY OF ALL THE HEADINGS FOUNDED
    const weatherWindElement = screen.getByText(/Viento/);
    //ASSERT
    //WHAT WE EXPECTED ABOUT THIS TEST
    //TELLING THE NUMBER OF ITEMS THAT MUST BE IN THE LIST
    expect(weatherWindElement).toBeInTheDocument;
});

test("humidity to be in the document", async () => {
    renderedComponent();
    const weatherHumidityElement = screen.getByText(/Humedad/);
    expect(weatherHumidityElement).toBeTruthy;
});