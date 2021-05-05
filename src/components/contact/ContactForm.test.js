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

//to make sure that input value changed
describe("change input", () => {
  it("test firstname input field", () => {
    const { getByTitle } = render(<ContactForm />);
    const input = getByTitle("firstName");
    fireEvent.change(input, { target: { value: "test-firstname" } });
    expect(input.value).toBe("test-firstname");
  });
  it("test lastname input field", () => {
    const { getByTitle } = render(<ContactForm />);
    const input = getByTitle("lastName");
    fireEvent.change(input, { target: { value: "test-lastname" } });
    expect(input.value).toBe("test-lastname");
  });
  it("test email input field", () => {
    const { getByTitle } = render(<ContactForm />);
    const input = getByTitle("email");
    fireEvent.change(input, { target: { value: "email" } });
    expect(input.value).toBe("email");
  });
  it("test message textarea", () => {
    const { getByTitle } = render(<ContactForm />);
    const input = getByTitle("message");
    fireEvent.change(input, { target: { value: "message" } });
    expect(input.value).toBe("message");
  });
});
