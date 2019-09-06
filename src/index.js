import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { render } from "react-dom";

let skiData = { total: 50, powder: 20, backcountry: 10, goal: 100 };

const getPercent = decimal => {
  return decimal * 100 + "%";
};

const calcGoalProgress = (total, goal) => {
  return getPercent(total / goal);
};

const SkiDayCounter = ({ total, powder, backcountry, goal }) => {
  return (
    <section>
      <div>
        <p>Total Days: {total}</p>
      </div>
      <div>
        <p>Powder : {powder}</p>
      </div>
      <div>
        <p>Backcountry Days: {backcountry}</p>
      </div>
      <div>
        <p>Goal Progress: {calcGoalProgress(total, goal)}</p>
      </div>
    </section>
  );
};

// class Message extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1 style={{ color: this.props.color }}>{this.props.msg}</h1>
//         <p>I'll check back in {this.props.minutes} minutes</p>
//       </div>
//     );
//   }
// }
//-----------------------------------------
// const title = React.createElement(
//   "ul",
//   { id: "title", className: "header", style: style },
//   React.createElement("l", {}, "item in our list")
// );

render(
  <SkiDayCounter
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal}
  />,
  // <Message color="blue" msg="How are you" minutes={5} />,
  document.getElementById("root")
);

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";
// const lakeList = [
//   { id: 1, name: "Echo Lake", trailHead: "Echo Lake" },
//   { id: 2, name: "Maud Lake", trailHead: "Wright's Lake" },
//   { id: 3, name: "Cascade Lake", trailHead: "Bayview Lake" }
// ];

// ReactDOM.render(
//   <App lakes={lakeList} />,

//   document.getElementById("root")
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
