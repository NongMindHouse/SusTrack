import React, { useState } from "react";
import ReactMapGL, { NavigationControl, Popup } from "react-map-gl";
import PopupCard from "../Map/PopupCard";
import SearchMap from "../Map/SearchMap";
import AddProjectSidebar from "./AddProjectSidebar.tsx";
import Markers, { Project } from "../Map/Markers";

import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "../Map/Popup.css";

const mapboxAccessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const AddProjectMapContainer: React.FC = () => {
  const [viewport, setViewport] = useState({
    latitude: 13.6504405,
    longitude: 100.4946602,
    zoom: 16,
  });

  const [popupInfo, setPopupInfo] = useState<Project>();

  const handleClickPopup = (project: Project) => {
    setPopupInfo(project);
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
        <Markers handleClickPopup={handleClickPopup} />

        {popupInfo && (
          <Popup
            anchor="bottom"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(undefined)}
          >
            <PopupCard title={popupInfo.title} image={popupInfo.image} desc={popupInfo.desc} />
          </Popup>
        )}

        <NavigationControl position="bottom-right" />
        <SearchMap mapboxAccessToken={mapboxAccessToken} position="top-left" />
        <AddProjectSidebar />
      </ReactMapGL>
    </div>
  );
};

export default AddProjectMapContainer;
