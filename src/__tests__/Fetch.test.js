import React from "react";
import { render, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Fetch from "../Fetch";

test("<Fetch />", async () => {
  const { getByTestId } = render(<Fetch />);
  await waitForElement(() => getByTestId("email"));
  expect(getByTestId("email")).toBeDefined();
  expect(getByTestId("email")).toHaveTextContent("@example.com");
});
