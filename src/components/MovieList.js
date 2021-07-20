import React from "react";
import '../styles/movieCard.css';

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="movie-poster" className="m-4">
          <img
            height="300px"
            width="200"
            src={movie.Poster}
            alt={"img not available"}
          />
          <div className="movie-title p-1 text-center">
            <h5>{movie.Title}</h5>
          </div>
          <div className="movie-year text-center">
            <p>({movie.Year})</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
