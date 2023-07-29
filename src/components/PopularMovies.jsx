import React, { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../api/MovieService.js";
import MovieCard from "./MovieCard.jsx";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    retrievePopularMovies();
  }, []);

  const retrievePopularMovies = async () => {
    try {
      const response = await getPopularMovies();
      setMovies(response.results);
    } catch (error) {
      console.error("Error retrieving popular movies:", error.message);
    }
  };

  return (
    <div>
      <h1>Movie List</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map(
          (movie) =>
            movie.posterPath && <MovieCard key={movie.id} movie={movie} />
        )}
      </div>
    </div>
  );
};

export default MovieList;
