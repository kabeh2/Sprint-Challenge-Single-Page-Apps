import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import PaginationBlock from "./Pagination/paginationBlock";
import SearchBox from "./SearchBox";

export default function CharacterList(props) {
  console.log(props);
  const initialUrl = "https://rickandmortyapi.com/api/character/";
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState();
  const [pagination, setPagination] = useState();
  const [apiUrl, setApiUrl] = useState(initialUrl);
  const [backBtn, setBackBtn] = useState("");
  const [nextBtn, setNextBtn] = useState("");
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    const fetchData = async () => {
      setError(false);
      try {
        const response = await axios.get(apiUrl);
        console.log(response.data.info);
        setCharacterList(response.data.results);

        setPagination(response.data.info);
        setBackBtn(response.data.info.prev);
        setNextBtn(response.data.info.next);
      } catch (error) {
        setError(true);
        console.error("Error: ", error.message);
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

    props.history.replace(`${props.match.url}?search=${query}`);

    setApiUrl(
      `https://rickandmortyapi.com/api/character/?page=1&name=${query}`
    );
    setQuery("");
  };

  const handleBack = e => {
    e.preventDefault();
    props.history.replace("/characters");

    setApiUrl(initialUrl);
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
      <div
        className="search-row"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "24px 0"
        }}
      >
        {apiUrl !== initialUrl && (
          <button
            type="success"
            onClick={e => handleBack(e)}
            disabled={apiUrl === initialUrl ? true : false}
            style={
              apiUrl === initialUrl
                ? { cursor: "not-allowed" }
                : { cursor: "pointer" }
            }
          >
            Back to All
          </button>
        )}
        <SearchBox
          characters={characterList}
          setCharacterList={setCharacterList}
          query={query}
          setQuery={setQuery}
          onSubmit={handleSubmit}
        />
      </div>
      {error && (
        <div style={{ color: `red` }}>
          {`Sorry! There are no results for your search query - "${props.location.search
            .replace("?search=", "")
            .toUpperCase()}"`}
        </div>
      )}

      {!error && (
        <>
          <section className="character-list grid-view">
            {characterRender}
          </section>
          <PaginationBlock
            pagination={pagination}
            next={nextBtn}
            prev={backBtn}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        </>
      )}
    </React.Fragment>
  );
}
