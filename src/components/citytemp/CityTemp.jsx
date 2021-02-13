import React from 'react'
import * as BootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import getImg from "../imgs/imgs";
import format from "../../helper/helpers";
import { FaSun} from 'react-icons/fa';
import sunSetIcon from "../../sunset.png";


export default function CityTemp({location, data,sunRise, sunSet}) {
    
    return (
        <BootStrap.Col md={4} >
            <h1 className="text-lg-left text-sm-center text-info"> {location} </h1>  
            
            <BootStrap.Row >
                <BootStrap.Col lg="auto" className="text-left text-lg-left text-sm-center text-sm-center m-auto" >
                   
                        <BootStrap.Image src={getImg(data.weather_state_abbr)} fluid  width="100" alt="weather icon" className="text-left p-0"/>
                
                   
                </BootStrap.Col>
                
                <BootStrap.Col className=" text-lg-left text-sm-center  m-auto border border-light shadow-sm  p-4" >
                <p className="p-0 m-0"> <b>Date: </b> {data.applicable_date}</p>
                <p className="p-0 m-0" ><b>overcast: </b> {format(data.the_temp,1)} &deg;c</p> 
                <p className="p-0 m-0"> <b> Sun Rise: </b> {sunRise.substring(sunRise.indexOf('T') +1, sunRise.indexOf('.'))} <FaSun color="#FDB302" /></p>
                <p className="p-0 m-0"> <b>Sun Set:</b> {sunSet.substring(sunSet.indexOf('T') +1, sunSet.indexOf('.'))} <img  src={sunSetIcon} alt="logo" width="25"/> </p>
                <p className="p-0 m-0"> <b>Sky:</b> {data.weather_state_name}</p>
               
                </BootStrap.Col>
            </BootStrap.Row>
        </BootStrap.Col>

     
        
        

    )
}
