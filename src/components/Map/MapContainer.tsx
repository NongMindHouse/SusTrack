import React, { useState } from "react";
import ReactMapGL, { NavigationControl, Popup } from "react-map-gl";
import PopupCard from "./PopupCard";
import SearchMap from "./SearchMap";
import Sidebar from "./Sidebar";
import Markers, { Project } from "./Markers";

import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "./Popup.css";

const mapboxAccessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const MapContainer: React.FC = () => {
  const [imgHeight, setImgHeight] = useState("80px");
  const [imgWidth, setImgWidth] = useState("56px");
  const [viewport, setViewport] = useState({
    latitude: 13.6504405,
    longitude: 100.4946602,
    zoom: 16,
  });

  const [popupInfo, setPopupInfo] = useState<Project>();

  const handleClickPopup = (project: Project) => {
    setPopupInfo(project);
  };
  
  const onChangeZoom = () => {
    if (viewport.zoom > 15.5) {
      setImgHeight("80px");
      setImgWidth("56px");
    } else if (viewport.zoom < 15.5) {
      setImgHeight("60px");
      setImgWidth("40px");
    } else if (viewport.zoom < 14.5) {
      setImgHeight("30px");
      setImgWidth("20px");
    }
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ReactMapGL
        {...viewport}
        mapboxAccessToken={mapboxAccessToken}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        onMove={(evt) => {
          setViewport(evt.viewState);
          onChangeZoom();
          console.log(viewport.zoom);
        }}
      >
        <Markers handleClickPopup={handleClickPopup} imgHeight={imgHeight} imgWidth={imgWidth} />

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
        <Sidebar />
      </ReactMapGL>
    </div>
  );
};

export default MapContainer;
