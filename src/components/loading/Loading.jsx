import React from 'react'
import * as BootStrap from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


export default function Loading() {
    return (
        <BootStrap.Container fluid  style={{height:'100vh'}}>
           <BootStrap.Col className="m-auto text-info" style={{position:'absolute', top:'50vh'}}>
           <BootStrap.Spinner animation="grow"  className="justify-content-md-center pr-4" />
           
          <span className="p-3"> Loading...</span>
           </BootStrap.Col>

        </BootStrap.Container>
    )
}
