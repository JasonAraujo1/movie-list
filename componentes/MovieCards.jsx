// components/MovieCard.js
import React from "react";
import { IMGPATH } from "../utils/api";



const MovieCard = ({ movie }) => {
  const { poster_path, title, overview, vote_average } = movie;

  return (
    <div className="movie-card bg-black">
      <img
        src={`${IMGPATH}${poster_path}`}
        alt={title}
        className=""
      />
      <div className="movie-info">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span
          class={`vote-average ${
            vote_average >= 8 ? "green" : vote_average >= 7 ? "orange" : "red"
          }`}
        >
          {Math.floor(vote_average)}
        </span>
      </div>
      <div className="overview">
        <h3 className="text-lg font-semibold text-white mb-2">Overview:</h3>
        <p className="text-gray-300">{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
