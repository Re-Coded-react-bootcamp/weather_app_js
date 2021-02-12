import "./SearchBar.css";

import Option from "../option/Option";

import Snow from "../../assets/images/Snow.jpg";
import Sleet from "../../assets/images/Sleet.jpg";
import Hail from "../../assets/images/Hail.jpg";
import Thunderstorm from "../../assets/images/Thunderstorm.jpg";
import HeavyRain from "../../assets/images/HeavyRain.jpg";
import LightRain from "../../assets/images/LightRain.jpg";
import Showers from "../../assets/images/Showers.jpg";
import HeavyCloud from "../../assets/images/HeavyCloud.jpg";
import LightCloud from "../../assets/images/LightCloud.jpeg";
import Clear from "../../assets/images/Clear.jpg";

export default function SearchBar(props) {
  const images = {
    Snow: Snow,
    Sleet: Sleet,
    Hail: Hail,
    Thunderstorm: Thunderstorm,
    "Heavy Rain": HeavyRain,
    "Light Rain": LightRain,
    Showers: Showers,
    "Heavy Cloud": HeavyCloud,
    "Light Cloud": LightCloud,
    Clear: Clear,
  };
  return (
    <div
      className="SearchBar"
      style={{
        backgroundImage: `url(${images[props.image]})`,
      }}
    >
      <div className="SearchChilds">
        <h5 className="text-white">Search weather on your city</h5>
        <input
          value={props.input}
          onChange={(event) => {
            props.inp(event.target.value);
            if (event.target.value !== "") {
              props.inchanged(event.target.value);
            }
          }}
          type="text"
          autoComplete="false"
          placeholder="Search"
        />
        <div className="options" id="style-1">
          {props.input !== "" ? (
            props.show_lds ? (
              <div className="smallld">Loading...</div>
            ) : (
              props.city_opt.map((city, i) => (
                <Option key={i} update={props.update} city={city} />
              ))
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}
