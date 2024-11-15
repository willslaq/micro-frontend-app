import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Button from "./Button";

const App = () => (
  <div className="container">
    <div>Name: dsl</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Button label="MFE" />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
