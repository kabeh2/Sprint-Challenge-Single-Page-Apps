import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState();

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character/"
        );
        console.log(response);
        setCharacterList(response.data.results);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchData();
  }, []);

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
    <section className="character-list grid-view">{characterRender}</section>
  );
}
