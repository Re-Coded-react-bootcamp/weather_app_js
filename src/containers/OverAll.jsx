import React, { useState, useEffect } from "react";
import Loading from "../components/loading/Loader.jsx";
import SearchBar from "../components/SearchBar/SearchBar";
import WeatherBody from "../components/WeatherBody/WeatherBody";
export default function OverAll() {
  let [loaded, ld] = useState(false);
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
        ld(true);
      });
  }
  return (
    <div>
      {loaded ? null : <Loading />}
      <React.Fragment>
        <SearchBar city="koya" searchCity="none" />
      </React.Fragment>
      <div className="weatherContainer">
        <h5 className="cityName">koya</h5>
        <WeatherBody />
        <WeatherBody />
        <WeatherBody />
        <WeatherBody />
        <WeatherBody />
      </div>
    </div>
  );
}
