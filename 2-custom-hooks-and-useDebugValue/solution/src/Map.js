import React from "react";
import useMap from "./useMap";

function Map() {
  const mapElement = useMap();

  return (
    <div
      ref={mapElement}
      style={{ width: 600, height: 400, backgroundColor: "#ddd" }}
    />
  );
}

export default Map;
