import React, { useState, useEffect } from "react";
import Loading from "../components/loading/Loader.jsx";
import SearchBar from "../components/SearchBar/SearchBar";
import WeatherBody from "./WeatherBody/WeatherBody";

export default function OverAll() {
  const [loaded, ld] = useState(false);
  const [show_lds, lds] = useState(false);
  const [city, ct] = useState("");
  const [options, set_opt] = useState([]);
  const [input, inp] = useState("");
  const [days, set_days] = useState([]);
  const [image, set_img] = useState("");
  const [grad, set_grad] = useState("");
  useEffect(() => {
    update(615702);
  }, []);

  function changed(str) {
    lds(true);
    fetch("https://www.metaweather.com/api/location/search/?query=" + str)
      .then((r) => {
        return r.json();
      })
      .then((r) => {
        let newy = [];
        for (let i = 0; i < r.length; i++) {
          if (r[i].location_type === "City") {
            newy.push({ name: r[i].title, woeid: r[i].woeid });
          }
        }
        set_opt(newy);
        lds(false);
      });
  }

  function hover(img) {
    set_img(img);
    console.log(img);
    switch (img) {
      case "Clear":
        set_grad(
          "linear-gradient(  90deg, rgb(230, 157, 0) 20%, rgb(243, 191, 19) 50%, rgb(209, 136, 0) 100%)"
        );
        break;
      case "Light Cloud":
        set_grad(
          "linear-gradient(  90deg, rgb(230, 157, 0) 20%, rgb(243, 191, 19) 50%, rgb(209, 136, 0) 100%)"
        );
        break;
      case "Heavy Cloud":
        set_grad(
          "linear-gradient(  90deg, rgb(230, 157, 0) 20%, rgb(243, 191, 19) 50%, rgb(209, 136, 0) 100%)"
        );
        break;
      case "Showers":
        set_grad(
          "linear-gradient(90deg,rgba(249, 157, 149, 1) 20%,rgba(218, 107, 115) 50%,rgba(207, 99, 103, 1) 100%)"
        );
        break;
      case "Light Rain":
        set_grad(
          "linear-gradient(90deg,rgba(249, 157, 149, 1) 20%,rgba(218, 107, 115) 50%,rgba(207, 99, 103, 1) 100%)"
        );
        break;
      case "Heavy Rain":
        set_grad(
          "linear-gradient(90deg,rgba(249, 157, 149, 1) 20%,rgba(218, 107, 115) 50%,rgba(207, 99, 103, 1) 100%)"
        );
        break;
      default:
        set_grad(
          "linear-gradient(  90deg, rgb(103, 243, 220) 20%,rgb(37, 207, 219) 50%,rgb(0, 158, 158) 100%)"
        );
        break;
    }
  }

  function update(woeid) {
    ld(false);
    fetch("https://www.metaweather.com/api/location/" + woeid)
      .then((r) => {
        return r.json();
      })
      .then((r) => {
        var rozh = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let newy = [];
        for (let i = 0; i < r.consolidated_weather.length; i++) {
          newy.push({
            day:
              rozh[
                new Date(r.consolidated_weather[i].applicable_date).getDay()
              ],
            minTemp: r.consolidated_weather[i].min_temp.toFixed(1),
            maxTemp: r.consolidated_weather[i].max_temp.toFixed(1),
            icon: r.consolidated_weather[i].weather_state_abbr,
            description: r.consolidated_weather[i].weather_state_name,
          });
        }
        ct(r.title);
        inp("");
        set_days(newy);
        hover(newy[0].description);
        ld(true);
      });
  }
  return (
    <div>
      {loaded ? null : <Loading />}

      <SearchBar
        image={image}
        inchanged={changed}
        show_lds={show_lds}
        city_opt={options}
        update={update}
        input={input}
        inp={inp}
      />

      <div className="weatherContainer" style={{ background: grad }}>
        <h5 className="cityName">{city}</h5>
        {days.map((day, i) => (
          <WeatherBody
            hovering={() => {
              hover(day.description);
            }}
            key={i}
            day={day}
          />
        ))}
      </div>
    </div>
  );
}
