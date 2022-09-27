import Weather from './Weather';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test("Weather component", async () =>{
    //ARRANGE
    const { findByRole } = render(<Weather temperature={18} state={"cloud"}/>);
    //ACT
    const temp = await findByRole("heading");
    //ASSERT
    expect(temp).toHaveTextContent("18");
});