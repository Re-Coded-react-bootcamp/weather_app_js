import React from 'react'
import * as Bootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearchLocation } from 'react-icons/fa';

export default function Search(props) {
    return (
        <Bootstrap.Form className="m-2" onSubmit={props.handleSubmit}>
          <Bootstrap.InputGroup className="mb-3">
            <Bootstrap.FormControl
              placeholder="City"
              aria-label="Country"
              aria-describedby="basic-addon2"
              onChange={props.handleChange}
              value={props.inputValue}
            />
            
            <Bootstrap.InputGroup.Append>
              <Bootstrap.Button variant="btn btn-info" type="submit" ><FaSearchLocation /></Bootstrap.Button>
            </Bootstrap.InputGroup.Append>

          </Bootstrap.InputGroup>
        </Bootstrap.Form>
    )
}
