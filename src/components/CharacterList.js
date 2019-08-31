import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import PaginationBlock from "./Pagination/paginationBlock";
import SearchBox from "./SearchBox";

export default function CharacterList() {
  const initialUrl = "https://rickandmortyapi.com/api/character/";
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState();
  const [pagination, setPagination] = useState();
  const [apiUrl, setApiUrl] = useState(initialUrl);
  const [backBtn, setBackBtn] = useState("");
  const [nextBtn, setNextBtn] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        console.log(response.data.info);
        setCharacterList(response.data.results);

        setPagination(response.data.info);
        setBackBtn(response.data.info.prev);
        setNextBtn(response.data.info.next);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  const handlePrev = () => {
    setApiUrl(backBtn);
  };
  const handleNext = () => {
    setApiUrl(nextBtn);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setApiUrl(`${apiUrl}?page=1&name=${query}`);
    setQuery("");
  };

  const characterRender = characterList ? (
    characterList.map(character => (
      <CharacterCard {...character} key={character.id} />
    ))
  ) : (
    <img
      src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif"
      alt="loading"
    />
  );

  return (
    <React.Fragment>
      <SearchBox
        characters={characterList}
        setCharacterList={setCharacterList}
        query={query}
        setQuery={setQuery}
        onSubmit={handleSubmit}
      />
      <section className="character-list grid-view">{characterRender}</section>

      <PaginationBlock
        pagination={pagination}
        next={nextBtn}
        prev={backBtn}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </React.Fragment>
  );
}
