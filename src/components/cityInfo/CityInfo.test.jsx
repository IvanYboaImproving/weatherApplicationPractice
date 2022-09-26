import CityInfo from './CityInfo'
import { render } from '@testing-library/react'
//AAA its an standard for test and it means:
//Arrange; prepare things to everything works
//Act; execute the test
//Assert; confirm or deny what we were expecting as a result

//Give const values to avoid typing errors in the parameters and then in the expected values
const city = "Guadalajara";
const country = "Mexico";

//test is the reserved word to make a test, pass as parameters the string with your
//test tittle and then make an arrow function with the logic
test("City info render", async () => {

    //Render the component inside the test, so it can be tested
    //ARRANGE
    const { findAllByRole } = render(<CityInfo city={city} country={country}/>)
    //ACT
    //THIS WILL RETURN AN ARRAY OF ALL THE HEADINGS FOUNDED
    const cityInfoComponent = await findAllByRole("heading")
    //ASSERT
    //WHAT WE EXPECTED ABOUT THIS TEST
    //TELLING WHAT THE ARRAY OF HEADINGS MUST HAVE ON THE TEXT
    expect(cityInfoComponent[0]).toHaveTextContent(city)
    expect(cityInfoComponent[1]).toHaveTextContent(country)
});