import React from "react";
import "./WeatherBody.css";
import Days from "../Days/Days";
import Icon from "../Wicons/Icon";
import Temp from "../Temp/Temp";

const WeatherBody = (props) => {
  return (
    <div className="weatherBody card">
      <Days day={props.day.day} />
      <Icon icon={props.day.icon} description={props.day.description} />
      <Temp minTemp={props.day.minTemp} maxTemp={props.day.maxTemp} />
    </div>
  );
};

export default WeatherBody;
