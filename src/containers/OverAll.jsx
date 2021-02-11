import React, { useState, useEffect } from "react";
import Loading from "../components/loading/Loader.jsx";
import SearchBar from "../components/SearchBar/SearchBar";
import WeatherBody from "../components/WeatherBody/WeatherBody";

export default function OverAll() {
  const [loaded, ld] = useState(false);
  const [show_lds, lds] = useState(false);
  const [city, ct] = useState("");
  const [options, set_opt] = useState([]);
  const [input, inp] = useState("");
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
        ct(r.title);
        inp("");
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
        <WeatherBody />
        <WeatherBody />
        <WeatherBody />
        <WeatherBody />
        <WeatherBody />
      </div>
    </div>
  );
}
