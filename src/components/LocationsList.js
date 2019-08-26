import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

const LocationList = () => {
  const [locationList, setLocationList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/location"
        );
        setLocationList(response.data.results);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };
    // return () => {
    //     cleanup
    // };

    fetchData();
  }, []);

  const locationRender = locationList ? (
    locationList.map(location => (
      <LocationCard {...location} key={location.id} />
    ))
  ) : (
    <img
      src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif"
      alt="loading"
    />
  );

  return (
    <section className="location-list grid-view">{locationRender}</section>
  );
};

export default LocationList;
