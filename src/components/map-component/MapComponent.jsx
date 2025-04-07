import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"
import L from "leaflet"
import { Box } from "@chakra-ui/react"
import "leaflet/dist/leaflet.css"

const MapComponent = () => {
  const mapRef = useRef(null)
  const mapInstance = useRef(null)

  useEffect(() => {
    if (!mapInstance.current && mapRef.current) {
      L.Icon.Default.mergeOptions({
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
      })
      mapInstance.current = L.map(mapRef.current).setView(
        [36.870045310014056, 14.657563196964842],
        13
      ) // Roma, Italia

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance.current)

      L.marker([36.870045310014056, 14.657563196964842])
        .addTo(mapInstance.current)
        .bindPopup(
          "<b>Poggio del Sole</b><br><br>Strada Provinciale per Marina di Ragusa, km 5700, 97100 Ragusa (RG)"
        )
        .openPopup()
      mapInstance.current.scrollWheelZoom.disable()
      mapInstance.current.dragging.disable()
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove()
        mapInstance.current = null
      }
    }
  }, [])

  return (
    <Box ref={mapRef} id='map' style={{ width: "100%", height: "500px" }}></Box>
  )
}

MapComponent.propTypes = {}
export default MapComponent
