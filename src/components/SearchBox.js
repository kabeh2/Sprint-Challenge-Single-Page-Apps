import React from "react";

const SearchBox = props => {
  const handleChange = event => {
    const query = event.target.value;

    props.setQuery(query);
  };

  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="search"
        name="query"
        className="searchBox"
        placeholder="Search..."
        value={props.query}
        onChange={event => handleChange(event)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
