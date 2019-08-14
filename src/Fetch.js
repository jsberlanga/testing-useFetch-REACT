import React, { useState } from "react";
import useFetch from "./useFetch";

const Fetch = () => {
  const {
    loading,
    data: { results }
  } = useFetch("https://randomuser.me/api/");

  return (
    <>
      {loading && <p>Loading...</p>}
      {results && (
        <div data-testid="email">Random Email: {results[0].email}</div>
      )}
    </>
  );
};

export default Fetch;
