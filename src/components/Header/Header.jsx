import React from 'react'
import format from "../../helper/helpers";
import * as Bootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCloudMoonRain ,FaWind, FaDirections,FaLowVision} from 'react-icons/fa';


const Header = (props) => {
    return (
        
        <React.Fragment >
            <Bootstrap.Col sm className="item"> <FaCloudMoonRain /> Rain: {format(props.todayData.predictability,0)} %</Bootstrap.Col>
            <Bootstrap.Col sm className="item"> Humidity: {format(props.todayData.humidity,0)} %</Bootstrap.Col>
            <Bootstrap.Col sm className="item"><FaWind /> Wind: {format(props.todayData.wind_speed)} Kph</Bootstrap.Col>
            <Bootstrap.Col sm className="item"> <FaDirections /> Wind Direction: {(props.todayData.wind_direction_compass)}</Bootstrap.Col>
            <Bootstrap.Col sm className="item">Pressure: {format(props.todayData.air_pressure,0)} hPa</Bootstrap.Col>
            <Bootstrap.Col sm className="item"><FaLowVision /> Visibility: {format(props.todayData.visibility)} km</Bootstrap.Col>
        </React.Fragment>  
    )
}




export default Header
