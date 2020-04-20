import React from "react";
import "./styles.css";

export default function App(props) {
  return (
    <div className="App">
      <h2>{props.count}</h2>
    </div>
  );
}
