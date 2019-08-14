import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import useFetch from "../useFetch";

global.fetch = require("jest-fetch-mock");

const data = JSON.stringify({ result: [{ email: "some@example.com" }] });

test("useFetch Hook", async () => {
  fetch.mockResponseOnce(data);
  const { result, waitForNextUpdate } = renderHook(() =>
    useFetch("https://randomuser.me/api/")
  );
  expect(result.current.loading).toBeTruthy();
  expect(result.current.data).toEqual([]);
  await waitForNextUpdate();
  expect(result.current.loading).toBeFalsy();
  expect(result.current.data).toStrictEqual({
    result: [{ email: "some@example.com" }]
  });
  expect(fetch.mock.calls.length).toBe(1);
});
