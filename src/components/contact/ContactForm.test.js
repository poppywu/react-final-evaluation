import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

//to make sure submit button exists
it("submitButton", () => {
  const { queryByTitle } = render(<ContactForm />);
  const submitBtn = queryByTitle("submitBtn");
  expect(submitBtn).toBeTruthy();
});

//to test form can submit

it("formSubmit", () => {
  const onSubmit = jest.fn();
  const { getByTitle } = render(<ContactForm onSubmit={onSubmit} />);
  fireEvent.submit(getByTitle("formSubmit"));
  expect(onSubmit).toBeCalled();
});
