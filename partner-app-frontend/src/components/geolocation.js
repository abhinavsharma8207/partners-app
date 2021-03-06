import React, { Component } from "react";
 
// Importing geolocated reducer function
import { geolocated } from "react-geolocated";
import Spinner from './spinner';
import Coordinates from "./coordinates";
 
class Geo extends Component {
  render() {
 
    // Check geolocation supported in
    // browser or not
    return this.props.isGeolocationAvailable ? (
 
      // Check location is enable in
      // browser or not
      this.props.isGeolocationEnabled ? (
 
        // Check coordinates of current
        // location is available or not
        this.props.coords ? (
          <Coordinates lat={this.props.coords.latitude} lon={this.props.coords.longitude}></Coordinates>
        ) : (
         <Spinner></Spinner>
        )
      ) : (
        <h1>Please enable location on your browser</h1>
      )
    ) : (
      <h1>Please, update your or change the browser </h1>
    );
  }
}
 
// Binding geolocated() reducer function to
// App component, while exporting it
export default geolocated()(Geo);