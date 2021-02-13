import React from 'react'
import format from "./helpers";
import * as Bootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import getImg from "../components/imgs/imgs";


function Th({header}) {


    return (
        <tr className="bg-info text-light border border-info shadow-sm  p-4" >
           { header.map((head, index) => <th key={index} > {head}</th>)}

        </tr>
    )
}

function Tr({oneDayData}) {

   
    return (
       <tr key={oneDayData.id} className="border border-info">
       <td><Bootstrap.Image src={getImg(oneDayData.weather_state_abbr)} width="70"  /></td>
       <td> {oneDayData.applicable_date}</td>
       <td> {format(oneDayData.min_temp,0)} &deg;C</td>
       <td> {format(oneDayData.max_temp,0)} &deg;C</td>
       <td> {format(oneDayData.wind_speed)} Kph</td>
       </tr>
    )
}


export {
    Tr,
    Th
}