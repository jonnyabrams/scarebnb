import { useState } from "react";
import ReactMapGL from "react-map-gl";
import { getCenter } from "geolib";

import data from "../data";

const Map = () => {
  // transform the searchResults object into latitude/longitude object
  const coordinates = data.map((item) => ({
    longitude: item.long,
    latitude: item.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    // @ts-ignore
    latitude: center.latitude,
    // @ts-ignore
    longitude: center.longitude,
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
