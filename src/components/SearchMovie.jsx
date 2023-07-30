import React, { useState, useEffect } from "react";
import { searchMovies } from "../api/MovieService.js";
import MovieCard from "./MovieCard.jsx";

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
           movie.posterPath &&
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
