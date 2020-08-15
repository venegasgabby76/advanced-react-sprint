import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    //Arrange
    render(<CheckoutForm />);

    //Act 
    const header = screen.getByText(/Checkout Form/)
    //could have also done const header = screen.getByText(/checkout form/i), it is the same thing.

    //Assert
    expect(header).toBeInTheDocument();
});


//for this test i need to check that every aspect of checkout page works correctly
//check for firstname, lastname, address, city, state and zip
//also make sure that when you press the checkout button that that will work
//lastly need to check and make sure that the actually message will show up on the bottom of the page.
test("form shows success message on submit with form details", () => {

    render(<CheckoutForm />)

    //type into the input fields 
    // we want to query for those inout and then run the changes

    //first name
    const firstNameInput = screen.getByLabelText(/first name/i);
    fireEvent.change(firstNameInput, {target: {value: 'Jane'}});

    //last name
    const lastNameInput = screen.getByLabelText(/last name/i);
    fireEvent.change(lastNameInput, {target: {value: 'Doe'}});

    //address
    const addressInput = screen.getByLabelText(/address/i);
    fireEvent.change(addressInput, {target: {value: '666 Salem'}});

    //city
    const cityInput = screen.getByLabelText(/city/i);
    fireEvent.change(cityInput, {target: {value: 'Jerusalem'}});

    //state
    const stateInput = screen.getByLabelText(/state/i);
    fireEvent.change(stateInput, {target: {value: 'Oregon'}});

    //zip code 
    const zipInput = screen.getByLabelText(/zip/i);
    fireEvent.change(zipInput, {target: {value: '66666'}});

    //submit button
    const clickCheckout = screen.getByText("Checkout")
    fireEvent.click(clickCheckout);
});
