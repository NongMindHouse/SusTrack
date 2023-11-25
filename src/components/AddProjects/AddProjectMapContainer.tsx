import React, { useState } from "react";
import ReactMapGL, { NavigationControl } from "react-map-gl";
import SearchMap from "../Map/SearchMap";
import AddProjectSidebar from "./AddProjectSidebar.tsx";
import PopupIndicator from "./PopupIndicator.tsx";

import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "../Map/Popup.css";

const mapboxAccessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const AddProjectMapContainer: React.FC = () => {
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

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ReactMapGL
        {...viewport}
        mapboxAccessToken={mapboxAccessToken}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        onMove={(evt) => {
          setViewport(evt.viewState);
        }}
      >
        <NavigationControl position="bottom-right" />
        <SearchMap mapboxAccessToken={mapboxAccessToken} position="top-left" />
        <AddProjectSidebar onSDGsClick={handleSDGsClick} />
      </ReactMapGL>
      <PopupIndicator
        isOpen={isPopupOpen}
        activeTab={activeTab}
        onTabClick={handleTabClick}
        onClose={handleClosePopup}
      />
    </div>
  );
};

export default AddProjectMapContainer;
