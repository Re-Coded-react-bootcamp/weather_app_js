import React from 'react'
import * as Bootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tr,Th} from "../../helper/TableHelper"


export default function WeekTemp(props) {

    console.log()
    return (
        <React.Fragment>
            <Bootstrap.Table  striped hover size="sm" >
            <thead>
            <Th header={[" Icon", "Date", "Low", "High", "Wind Speed"]}/>
            </thead>
            <tbody>
            <Tr oneDayData={props.data.consolidated_weather[0]} />
            <Tr oneDayData={props.data.consolidated_weather[1]} />
            <Tr oneDayData={props.data.consolidated_weather[2]} />
            <Tr oneDayData={props.data.consolidated_weather[3]} />
            <Tr oneDayData={props.data.consolidated_weather[4]} />
            <Tr oneDayData={props.data.consolidated_weather[5]} />
            
            </tbody>
              
            
            </Bootstrap.Table>
        
        </React.Fragment>
    )
}
