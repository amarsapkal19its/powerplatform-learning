import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./Portfolio";
import Course from "./Courses";
import Enquiry from "./Enquiry";
function App() {
  return (
    <div>
      <Portfolio></Portfolio>
      <Course></Course>
      <Enquiry></Enquiry>
    </div>
  );
}

//ReactDOM.createRoot(document.getElementById("root")).render(<App />);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
