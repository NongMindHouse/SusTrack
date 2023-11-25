import React, { useCallback, useEffect, useState } from "react";
import ReactMapGL, { NavigationControl, Popup } from "react-map-gl";
import PopupCard from "./PopupCard";
import SearchMap from "./SearchMap";
import Sidebar from "./Sidebar";
import Markers from "./Markers";

import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "./Popup.css";
import { Project } from "@/types/Model";
import { Axios } from "@/utils/Axios";

const mapboxAccessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const MapContainer: React.FC = () => {
  const [imgHeight, setImgHeight] = useState("44px");
  const [imgWidth, setImgWidth] = useState("30px");
  const [projects, setProjects] = useState<Project[]>([]);
  const [popupInfo, setPopupInfo] = useState<Project>();

  const [viewport, setViewport] = useState({
    latitude: 13.6504405,
    longitude: 100.4946602,
    zoom: 12,
  });

  const handleGetProject = useCallback(async (): Promise<void> => {
    try {
      const res = await Axios.get(`/api/projects`);
      if (res.status === 200) {
        console.log(res.data.data);
        setProjects(res.data.data);
      }
    } catch (err) {}
  }, []);

  useEffect(() => {
    handleGetProject();
  }, [handleGetProject]);

  const handleClickPopup = (project: Project) => {
    setPopupInfo(project);
  };

  const onChangeZoom = () => {
    if (viewport.zoom > 15.5) {
      setImgHeight("60px");
      setImgWidth("40px");
    } else if (viewport.zoom > 14.5) {
      setImgHeight("50px");
      setImgWidth("35px");
    } else if (viewport.zoom > 12.5) {
      setImgHeight("44px");
      setImgWidth("30px");
    } else if (viewport.zoom > 11.5) {
      setImgHeight("32px");
      setImgWidth("24px");
    }
    // else if (viewport.zoom > 10.5) {
    //   setImgHeight("17px");
    //   setImgWidth("12px");
    // }
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
        }}
      >
        <Markers projects={projects} handleClickPopup={handleClickPopup} imgHeight={imgHeight} imgWidth={imgWidth} />

        {popupInfo && (
          <Popup
            anchor="bottom"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(undefined)}
          >
            <PopupCard
              id={popupInfo.id}
              name={popupInfo.name}
              bannerUrl={popupInfo.bannerUrl}
              description={popupInfo.description}
            />
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
