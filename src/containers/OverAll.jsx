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
        ld(true);
      });
  }
  return (
    <div>
      {loaded ? null : <Loading />}

      <SearchBar
        inchanged={changed}
        show_lds={show_lds}
        city_opt={options}
        update={update}
        input={input}
        inp={inp}
      />

      <div className="weatherContainer">
        <h5 className="cityName">{city}</h5>
        {days.map((day, i) => (
          <WeatherBody key={i} day={day} />
        ))}
      </div>
    </div>
  );
}
