// components/SearchBar.js
import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <header>
      <form>
        <input
          type="text"
          placeholder="Search for a movie..."
          onChange={(e) => onSearch(e.target.value)}
        />
        <button
          type="button"
          onClick={(e) => onSearch(e.target.previousSibling.value)}
        >
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
