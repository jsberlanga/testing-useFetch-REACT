import React from "react";
import Counter from "../Counter";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

beforeEach(() => cleanup());

test("Counter", () => {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId("increment")).toHaveTextContent("+");
  expect(getByTestId("decrement")).toHaveTextContent("-");
  expect(getByTestId("decrement")).toBeDisabled();
  fireEvent.click(getByTestId("increment"));
  fireEvent.click(getByTestId("increment"));
  expect(getByTestId("count")).toHaveTextContent("2");
  fireEvent.click(getByTestId("decrement"));
  expect(getByTestId("count")).toHaveTextContent("1");
  fireEvent.click(getByTestId("reset"));
  expect(getByTestId("count")).toHaveTextContent("0");
});
