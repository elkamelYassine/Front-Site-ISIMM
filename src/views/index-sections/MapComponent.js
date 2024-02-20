import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LeafIcon,
} from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import the Leaflet CSS
import { Container } from "reactstrap";
import L from "leaflet";

const MapComponent = () => {
  const center = [35.76440286851841, 10.840828573030606]; // Initial map center

  const myIcon = L.icon({
    iconUrl: require("leaflet/images/marker-icon.png"),
    iconSize: [24, 40],
    iconAnchor: [16, 32],
    popupAnchor: null,
    shadowUrl: require("leaflet/images/marker-shadow.png"),
    shadowSize: null,
    shadowAnchor: null,
  });

  const markers = [
    {
      position: [35.76440286851841, 10.840828573030606],
      content: "ISIMM location",
    },

    // Add more markers as needed
  ];
  const position = [35.76440286851841, 10.840828573030606];

  return (
    <>
      <div className="section ">
        <Container>
          <div className="title">
            <h2>Map</h2>
          </div>
          <br />
          <div style={{ marginRight: "50%", marginLeft: "10%" }}>
            <MapContainer
              center={center}
              zoom={16}
              style={{ height: "400px", width: "200%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position} icon={myIcon}>
                <Popup>ISIMM location</Popup>
              </Marker>
            </MapContainer>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MapComponent;
