import React from "react";
import "./WeatherBody.css";
import Days from "../../components/Days/Days";
import Icon from "../../components/Wicons/Icon";
import Temp from "../../components/Temp/Temp";

const WeatherBody = (props) => {
  return (
    <div onMouseEnter={props.hovering} className="weatherBody card">
      <Days day={props.day.day} />
      <Icon icon={props.day.icon} description={props.day.description} />
      <Temp minTemp={props.day.minTemp} maxTemp={props.day.maxTemp} />
    </div>
  );
};

export default WeatherBody;
