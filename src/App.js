import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import { getPlacesData } from "./api";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      const {
        coords: { latitude, longitude },
      } = data;
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    const fetchData = () => {
      const data = getPlacesData(bounds?.sw, bounds?.ne);
      setPlaces(data);
    };
    fetchData();
  }, [coordinates, bounds]);

  return (
    <div>
      <Header />
      <div className="flex bg-gray-200">
        <List places={places} />
        <Map className="bg-slate-500"
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
        />
      </div>
    </div>
  );
};

export default App;
