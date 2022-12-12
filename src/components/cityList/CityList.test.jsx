import CityList from '../cityList/CityList';
import { render, fireEvent } from  '@testing-library/react';

const cities = [
    { city: "Guadalajara", country: "México", lat: "20.676655020772536", lon: "-103.34701838047076" },
    { city: "Zapopan", country: "México", lat: "20.71153210946333", lon:"-103.41000846699498" },
    { city: "Tlaquepaque", country: "México", lat: "20.639709256720273", lon:"-103.31184347458104" },
    { city: "Tlajomulco de Zuñiga", country: "México", lat: "20.474965135263087", lon:"-103.44777841940162" },
    { city: "Tonalá", country: "México", lat: "20.624641475269556", lon:"-103.24182613132547" }
  ];

test("City list render", async () => {
    //ARRANGE
    //Render the component inside the test, so it can be tested
    const funcClick = jest.fn();
    const {findAllByRole} = render(<CityList cities={cities} onClickCity={funcClick}/>);
    //ACT
    //THIS WILL RETURN AN ARRAY OF ALL THE HEADINGS FOUNDED
    // eslint-disable-next-line testing-library/prefer-screen-queries
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
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const cityListComponent = await findAllByRole("button");
    fireEvent.click(cityListComponent[0]);
    //ASSERT
    //WHAT WE EXPECTED ABOUT THIS TEST
    //TELLING THE NUMBER OF ITEMS THAT MUST BE IN THE LIST
    expect(funcClick).toHaveBeenCalledTimes(1);
});