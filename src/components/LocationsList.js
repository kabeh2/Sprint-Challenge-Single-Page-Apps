import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import PaginationBlock from "./Pagination/paginationBlock";

const LocationList = () => {
  const [locationList, setLocationList] = useState();
  const [apiUrl, setApiUrl] = useState(
    "https://rickandmortyapi.com/api/location"
  );
  const [pagination, setPagination] = useState();
  const [backBtn, setBackBtn] = useState("");
  const [nextBtn, setNextBtn] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setLocationList(response.data.results);
        setPagination(response.data.info);
        setBackBtn(response.data.info.prev);
        setNextBtn(response.data.info.next);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };
    // return () => {
    //     cleanup
    // };

    fetchData();
  }, [apiUrl]);

  const handlePrev = () => {
    setApiUrl(backBtn);
  };
  const handleNext = () => {
    setApiUrl(nextBtn);
  };

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
    <React.Fragment>
      <section className="location-list grid-view">{locationRender}</section>
      <PaginationBlock
        pagination={pagination}
        next={nextBtn}
        prev={backBtn}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </React.Fragment>
  );
};

export default LocationList;
