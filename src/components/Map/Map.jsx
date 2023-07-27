import React from "react";
import GoogleMapReact from "google-map-react";

const Map = ({ setCoordinates, coordinates, setBounds }) => {
  const GOOGLE_MAPS_API_KEY = "AIzaSyDFoZOp1KA1DtLdFPm4xy7TIF1-_IvtApM";
  return (
    <div className=" p-0.5">
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sws });
        }}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
