import React from "react";
import cloudy from "../../assets/cloudy.svg";
import Rain from "../../assets/rain.svg";
import Snowing from "../../assets/snowing.svg";
import Therometer from "../../assets/thermometer.svg";
import "./Icon.css";

import "./Icon.css";

const Icon = (props) => {
  switch (props.icon) {
    case 801:
      return <img className="icon" src={cloudy} alt={cloudy} />;
    case 802:
      return <img className="icon" src={cloudy} alt={cloudy} />;
    case 803:
      return <img className="icon" src={cloudy} alt={cloudy} />;

    case 200:
      return <img className="icon" src={Rain} alt={Rain} />;
    case 201:
      return <img className="icon" src={Rain} alt={Rain} />;
    case 202:
      return <img className="icon" src={Rain} alt={Rain} />;
    case 600:
      return <img className="icon" src={Snowing} alt={Snowing} />;
    case 601:
      return <img className="icon" src={Snowing} alt={Snowing} />;
    case 602:
      return <img className="icon" src={Snowing} alt={Snowing} />;
    case 610:
      return <img className="icon" src={Snowing} alt={Snowing} />;
    default:
      return (
        <React.Fragment>
          <img className="icon" src={Therometer} />
          <h5>{props.description}</h5>
        </React.Fragment>
      );
  }
};

export default Icon;
