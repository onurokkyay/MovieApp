import React, { useState, useEffect } from "react";
import axios from "axios";
import { searchMovies } from "../api/MovieService.js";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    try {
      // Make the API call using MovieService
      const response = await searchMovies(searchQuery);

      // Extract the list of movies from the response data
      const moviesData = response.results;
      setMovies(moviesData);
    } catch (error) {
      console.error("Error searching movies:", error.message);
    }
  };

  return (
    <div>
      <h1>Movie List</h1>
      <div>
        <input
          type="text"
          placeholder="Search Movie"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((movie) => (
          <div key={movie.id} className="col">
            <div className="card">
              <img
                src={movie.posterPath}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">Release Date: {movie.releaseDate}</p>
                <p className="card-text">Adult: {movie.adult ? "Yes" : "No"}</p>
                <p className="card-text">
                  Original Language: {movie.originalLanguage}
                </p>
                <p className="card-text">
                  Original Title: {movie.originalTitle}
                </p>
                <p className="card-text">Overview: {movie.overview}</p>
                <p className="card-text">Popularity: {movie.popularity}</p>
                <p className="card-text">Vote Average: {movie.voteAverage}</p>
                <p className="card-text">Vote Count: {movie.voteCount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
