// MapComponent.js
import React from "react"
import PropTypes from 'prop-types'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

const containerStyle = {
  width: "100%",
  height: "400px",
}

const center = {
  lat: 36.869976645566474, // Latitude of your location
  lng: 14.657305704891542, // Longitude of your location
}

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}

MapComponent.propTypes = {}

export default MapComponent
