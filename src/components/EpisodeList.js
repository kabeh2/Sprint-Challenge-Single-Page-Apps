import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";
import PaginationBlock from "./Pagination/paginationBlock";

const EpisodeList = props => {
  const [episodeList, setEpisodeList] = useState();
  const [apiUrl, setApiUrl] = useState(
    "https://rickandmortyapi.com/api/episode/"
  );
  const [pagination, setPagination] = useState();
  const [backBtn, setBackBtn] = useState("");
  const [nextBtn, setNextBtn] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        console.log(response);
        setEpisodeList(response.data.results);
        setPagination(response.data.info);
        setBackBtn(response.data.info.prev);
        setNextBtn(response.data.info.next);
      } catch (error) {
        console.error("Error: " + error);
      }
    };

    fetchData();
    // return () => {
    //     cleanup
    // };
  }, [apiUrl]);

  const handlePrev = () => {
    setApiUrl(backBtn);
  };
  const handleNext = () => {
    setApiUrl(nextBtn);
  };

  const episodeRender = episodeList ? (
    episodeList.map(episode => <EpisodeCard {...episode} key={episode.id} />)
  ) : (
    <img
      src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif"
      alt="loading"
    />
  );

  return (
    <React.Fragment>
      <section className="episode-list">{episodeRender}</section>
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

export default EpisodeList;
