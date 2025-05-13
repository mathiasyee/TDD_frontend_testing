
import { render, fireEvent } from "@testing-library/react";
import CustomButton, { ButtonState } from "./CustomButton";
import "@testing-library/jest-dom";

describe("CustomButton", () => {
 test("renders with correct text and idle class", () => {
  const buttonText = "signup";
  const { getByRole } = render(<CustomButton buttonText={buttonText} />);
  const button = getByRole("button", { name: buttonText });  // Den här raden ger ett problem

  expect(button).toHaveValue(buttonText);  // Korrigerad förväntan
  expect(button).toHaveClass(ButtonState.idle);
});

  test("has idle class by default", () => {
    const { getByRole } = render(<CustomButton buttonText="Test" />);
    expect(getByRole("button")).toHaveClass(ButtonState.idle);
  });

  test("changes to hover class on mouse enter", () => {
    const { getByRole } = render(<CustomButton buttonText="Test" />);
    const button = getByRole("button");

    fireEvent.mouseEnter(button);
    expect(button).toHaveClass(ButtonState.hover);
  });

  test("changes to clicked class on click", () => {
    const { getByRole } = render(<CustomButton buttonText="Test" />);
    const button = getByRole("button");

    fireEvent.click(button);
    expect(button).toHaveClass(ButtonState.clicked);
  });

  test("has the correct class name on click", () => {
    const { getByRole } = render(<CustomButton buttonText="Test" />);
    const button = getByRole("button");

    fireEvent.click(button);
    expect(button).toHaveClass(ButtonState.clicked);
  });
  test("This test should fail for my github action training", () =>{
    expect (2 + 2).toBe(999)
  })
});