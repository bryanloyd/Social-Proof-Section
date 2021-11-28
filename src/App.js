import React from "react";
import "./App.css";
import FeedbackComponent from "./components/FeedbackComponent";
import HeadingComponent from "./components/HeadingComponent";

const App = () => {
  return (
    <div className="App">
      <HeadingComponent />
      <FeedbackComponent />
    </div>
  );
};

export default App;
