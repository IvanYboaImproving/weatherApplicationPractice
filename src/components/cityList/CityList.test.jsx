import CityList from '../cityList/CityList';
import { render, fireEvent } from  '@testing-library/react';

const cities = [
    { city: "Guadalajara", country: "México" },
    { city: "Monterrey", country: "México" },
    { city: "CDMX", country: "México" },
    { city: "Buenos Aires", country: "Argentina" },
    { city: "Bogotá", country: "Colombia" },
    { city: "Lima", country: "Peru" }
];

test("City list render", async () => {
    //ARRANGE
    //Render the component inside the test, so it can be tested
    const funcClick = jest.fn();
    const {findAllByRole} = render(<CityList cities={cities} onClickCity={funcClick}/>);
    //ACT
    //THIS WILL RETURN AN ARRAY OF ALL THE HEADINGS FOUNDED
    const cityListComponent = await findAllByRole("button");
    //ASSERT
    //WHAT WE EXPECTED ABOUT THIS TEST
    //TELLING THE NUMBER OF ITEMS THAT MUST BE IN THE LIST
    expect(cityListComponent).toHaveLength(6);
});

test("Click on city list item", async () => {
    //ARRANGE
    //Render the component inside the test, so it can be tested
    const funcClick = jest.fn();
    const {findAllByRole} = render(<CityList cities={cities} onClickCity={funcClick}/>);
    //ACT
    //THIS WILL RETURN AN ARRAY OF ALL THE HEADINGS FOUNDED
    const cityListComponent = await findAllByRole("button");
    fireEvent.click(cityListComponent[0]);
    //ASSERT
    //WHAT WE EXPECTED ABOUT THIS TEST
    //TELLING THE NUMBER OF ITEMS THAT MUST BE IN THE LIST
    expect(funcClick).toHaveBeenCalledTimes(1);
});