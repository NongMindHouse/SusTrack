import React, { useEffect, useState } from "react";
import ReactMapGL, { GeolocateControl, Marker, NavigationControl } from "react-map-gl";
import SearchMap from "../Map/SearchMap";
import AddProjectSidebar from "./AddProjectSidebar.tsx";
import PopupIndicator from "./PopupIndicator.tsx";

import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "./addProject.css";

const mapboxAccessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const AddProjectMapContainer: React.FC = () => {
  const [marker, setMarker] = useState<any>(null);

  const [viewport, setViewport] = useState({
    latitude: 13.7205107,
    longitude: 100.4991089,
    zoom: 16,
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleSDGsClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const handleClickMap = (e: any) => {
    setMarker({ latitude: e.lngLat.lat, longitude: e.lngLat.lng });
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
      setMarker({ latitude: pos.coords.latitude, longitude: pos.coords.longitude });
    });
  }, []);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ReactMapGL
        {...viewport}
        mapboxAccessToken={mapboxAccessToken}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        onMove={(evt) => {
          setViewport(evt.viewState);
        }}
        onClick={(e) => handleClickMap(e)}
      >
        {marker ? <Marker latitude={marker.latitude} longitude={marker.longitude} color="red" /> : null}

        <NavigationControl position="bottom-right" />
        <GeolocateControl position="top-right" />
        <SearchMap mapboxAccessToken={mapboxAccessToken} position="top-left" />
        <AddProjectSidebar onSDGsClick={handleSDGsClick} />
      </ReactMapGL>
      <PopupIndicator
        isOpen={isPopupOpen}
        activeTab={activeTab}
        onTabClick={handleTabClick}
        onClose={handleClosePopup} onSubmit={function (checkedIndicators: string[]): void {
          throw new Error("Function not implemented.");
        } }      />
    </div>
  );
};

export default AddProjectMapContainer;
