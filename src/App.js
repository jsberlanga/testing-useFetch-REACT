import React from "react";
import "./App.css";
import Fetch from "./Fetch";
const Counter = React.lazy(() => import("./Counter"));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<p data-testid="fallback">Loading...</p>}>
        <Counter />
      </React.Suspense>
      <Fetch />
    </div>
  );
}

export default App;
