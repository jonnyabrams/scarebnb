import { useState } from "react";
import ReactMapGL from "react-map-gl";

const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/jsja85/cla0ye0dt00a515s6jv421iy2"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport} // puts all the viewport properties in here
    ></ReactMapGL>
  );
};

export default Map;
