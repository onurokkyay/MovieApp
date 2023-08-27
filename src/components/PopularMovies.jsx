import React, { useState, useEffect } from "react";
import { getPopularMovies } from "../api/MovieService.js";
import MovieCard from "./MovieCard.jsx";
import debounce from "lodash.debounce";

const MovieList = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    retrievePopularMovies();
    addScrollListener();
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [currentPage]);

  const addScrollListener = () => {
    window.addEventListener("scroll", debouncedHandleScroll);
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 20) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const debouncedHandleScroll = debounce(handleScroll, 100);

  const retrievePopularMovies = async () => {
    try {
      setLoading(true);
      const response = await getPopularMovies(currentPage);
      setPopularMovies((prevMovies) => [...prevMovies, ...response.movies]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error retrievePopularMovies:", error.message);
    }
  };

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {popularMovies.map(
          (movie) =>
            movie.posterPath && <MovieCard key={movie.id} movie={movie} />
        )}
      </div>
    </div>
  );
};

export default MovieList;
