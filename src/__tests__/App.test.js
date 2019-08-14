import React from "react";
import { render, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

test("App", async () => {
  const { getByTestId, queryByTestId } = render(<App />);
  expect(getByTestId("fallback")).toBeTruthy();
  await wait();
  expect(queryByTestId("fallback")).toBeFalsy();
});
