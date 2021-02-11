import React, { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchChilds">
          <h5 className="text-white">Search weather on your city</h5>
          <input
            type="text"
            name="city"
            id="inputSearchCity"
            onChange={this.onChange}
            placeholder="Search"
          />
        </div>
      </div>
    );
  }
}
