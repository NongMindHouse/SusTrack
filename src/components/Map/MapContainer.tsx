import React, { useState } from "react";
import ReactMapGL, { Marker, NavigationControl, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import PopupCard from "./PopupCard";

const mapboxAccessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const MapContainer: React.FC = () => {
  const [viewport, setViewport] = useState({
    latitude: 13.6504405,
    longitude: 100.4946602,
    zoom: 16,
  });

  const markers = [
    { latitude: 13.6504405, longitude: 100.4946602, title: "CPE" },
    { latitude: 13.6512402, longitude: 100.4936268, title: "San Francisco" },
    { latitude: 13.6506018, longitude: 100.4932941, title: "San Francisco" },
  ];

  return (
    <div style={{ height: "600px", width: "100%" }}>
      <ReactMapGL
        {...viewport}
        mapboxAccessToken={mapboxAccessToken}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        onMove={(evt) => {
          setViewport(evt.viewState);
        }}
      >
        {markers.map((marker, index) => (
          <Marker key={index} latitude={marker.latitude} longitude={marker.longitude}>
            <div>
              <span role="img" aria-label="marker" style={{ fontSize: "24px" }}>
                📍
              </span>
            </div>
          </Marker>
        ))}
        <Popup anchor="top" latitude={13.6504405} longitude={100.4946602} maxWidth="300px">
          <PopupCard
            title="Test Popup"
            image="https://fastly.picsum.photos/id/658/536/354.jpg?hmac=lJsBY1i-cotZRX7y_Gs4NWkIaCtyhT3HhAeLnRpra8k"
            desc="some desc"
          />
        </Popup>
        <NavigationControl position="bottom-right" />
      </ReactMapGL>
    </div>
  );
};

export default MapContainer;
