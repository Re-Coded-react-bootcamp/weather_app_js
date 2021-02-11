import React from "react";
import "./WeatherBody.css";
import Days from "../Days/Days";
import Icon from "../Wicons/Icon";
import Temp from "../Temp/Temp";

const WeatherBody = (props) => {
  return (
    <div className="weatherBody card">
      <Days day={props.day} />
      <Icon icon={props.icon} />
      <Temp minTemp={props.minTemp} maxTemp={props.maxTemp} />
    </div>
  );
};

export default WeatherBody;
