import React, { useState, useEffect } from "react";
import "./App.css";
import $ from "jquery";
const App = (props) => {
  const [spacedata, setData] = useState([]);
  useEffect(() => {
    if (
      props.launchVal !== null &&
      props.launchVal !== undefined &&
      props.launchVal !== " " &&
      props.btnVal === null &&
      props.btnVal === undefined &&
      props.btnVal === " " &&
      props.landVal === null &&
      props.landVal === undefined &&
      props.landVal === " "
    ) {
      window.location = `#${props.launchVal}`;
      window.addEventListener("hashchange", () => {
        window.reload();
        $.ajax({
          type: "GET",
          contentType: "application/json",
          url: `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${props.launchVal}`,
          dataType: "json",
          success: function (result) {
            return setData(result);
          },
          error: function (error) {
            console.log("Error handling - " + error);
          },
        });
      });
    }
    if (
      props.landVal !== null &&
      props.landVal !== undefined &&
      props.landVal !== " " &&
      props.launchVal !== null &&
      props.launchVal !== undefined &&
      props.launchVal !== " " &&
      props.btnVal === null &&
      props.btnVal === undefined &&
      props.btnVal === " "
    ) {
      window.location = `#${props.landVal}${props.launchVal}`;
      window.addEventListener("hashchange", () => {
        $.ajax({
          type: "GET",
          contentType: "application/json",
          url: `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${props.launchVal}&land_success=${props.landVal}`,
          dataType: "json",
          success: function (result) {
            return setData(result);
          },
          error: function (error) {
            console.log("Error - " + error);
          },
        });
      });
    }
    if (
      props.landVal !== null &&
      props.landVal !== undefined &&
      props.landVal !== " " &&
      props.btnVal !== null &&
      props.btnVal !== undefined &&
      props.btnVal !== " " &&
      props.launchVal !== null &&
      props.launchVal !== undefined &&
      props.launchVal !== " "
    ) {
      window.location = `#${props.landVal}${props.btnVal}${props.launchVal}`;
      window.addEventListener("hashchange", () => {
        $.ajax({
          type: "GET",
          contentType: "application/json",
          url: `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${props.launchVal}&land_success=${props.landVal}&launch_year=${props.btnVal}`,
          dataType: "json",
          success: function (result) {
            return setData(result);
          },
          error: function (error) {
            console.log("Error - " + error);
          },
        });
      });
    }
    if (
      props.landVal === null &&
      props.landVal === undefined &&
      props.landVal === " " &&
      props.btnVal === null &&
      props.btnVal === undefined &&
      props.btnVal === " " &&
      props.launchVal === null &&
      props.launchVal === undefined &&
      props.launchVal === " "
    ) {
      window.location = "#alldata";
      window.addEventListener("hashchange", () => {
        $.ajax({
          type: "GET",
          contentType: "application/json",
          url: `https://api.spacexdata.com/v3/launches?limit=100`,
          dataType: "json",
          success: function (result) {
            return setData(result);
          },
          error: function (error) {
            console.log("Error - " + error);
          },
        });
      });
    }
  });
  return (
    <div className="api_data">
      {spacedata.map((item) => {
        return (
          <div>
            <p>
              <img
                src={item.links.mission_patch}
                width="150"
                height="200"
                alt="rocketimages"
              ></img>
              <br />
              <span className="name">{`${item.mission_name}#${item.flight_number}`}</span>
              <br />
              <ul>
                {"Mission Ids:"}
                <li className="value">{String(item.mission_id)}</li>
              </ul>
              <span>
                <span>{"Launch Year:"}</span>
                <span className="value">{item.launch_year}</span>
              </span>
              <br />
              <span>
                <span>{"Launch Success:"}</span>
                <span className="value">{String(item.launch_success)}</span>
              </span>
              <br />
              <span>
                <span>{"Landing Success:"}</span>
                <span className="value">
                  {String(item.rocket.first_stage.cores[0].land_success)}
                </span>
              </span>
              <br />
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default App;
