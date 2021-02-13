import React from 'react'
import {Line} from 'react-chartjs-2';
import * as BootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Chart({data}) {
    return (
       <BootStrap.Col md className="mt-1 offset-md-1">
        <Line 
          data={data}
          options={{
            title:{
              display:true,
              text:'Tempreature and Humidity During the Week',
              fontSize:20,
              fontColor: 'rgb(23,162,184)',
              
            },
            legend:{
              display:true,
              position:'right',
              labels: {
                  // This more specific font property overrides the global property
                  fontColor: 'rgb(100,118,108)'
              }
            },
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Tempreature °C & Humidity %'
                }
              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Date'
                }
              }],
            }     
          }}
          />
       </BootStrap.Col>
    )
}
