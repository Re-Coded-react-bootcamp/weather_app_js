import React, { useState, useEffect } from "react";
import Loading from "../components/loading/Loader.jsx";
import SearchBar from "../components/SearchBar/SearchBar";
import WeatherBody from "../components/WeatherBody/WeatherBody";
export default function OverAll() {
  const [loaded, ld] = useState(false);
  const [city, ct] = useState("");
  useEffect(() => {
    update(615702);
  });

  function update(woeid) {
    fetch("https://www.metaweather.com/api/location/" + woeid)
      .then((r) => {
        return r.json();
      })
      .then((r) => {
        console.log(r);
        ct(r.title);
        ld(true);
      });
  }
  return (
    <div>
      {loaded ? null : <Loading />}

      <SearchBar city="koya" searchCity="none" />

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
