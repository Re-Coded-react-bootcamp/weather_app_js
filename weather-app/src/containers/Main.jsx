import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [broadcast, setbroadcast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://www.metaweather.com/api/location/2487956/`
      );
      console.log(result);
      setbroadcast(result.broadcast);
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      //axios use when you want to fetch data from external resource
      const result = await axios(
        `https://www.metaweather.com/api/location/search/?query=london`
        //here you should enter the city name and know
      );
      console.log(result);

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((cityinfo) => (
        <ul>
          <li>{cityinfo.title}</li>
          <li>{cityinfo.location_type}</li>
          <li>{cityinfo.woeid}</li>
          <li>{cityinfo.latt_long}</li>
        </ul>
      ))}
    </div>
  );
}
/**
 * LOOK THAT CODE WHEN YOU WANT TO CREATE A INPUR FOR SEARCH
 * const Handle = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "city") {
      Setdata({
        city: value,
      });
    }
   
    }
  
 THIS IS FOR A SEARCH BUTTON
  <input
          type="text"
          name="city"
          placeholde=""
          onChange={(e) => Handle(e)}
          //this e is like input
        ></input>

 */

export default App;
