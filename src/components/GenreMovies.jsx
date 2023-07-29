import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { discoverMovies } from "../api/MovieService";
import debounce from "lodash.debounce";
import MovieCard from "./MovieCard";

const GenreMovies = () => {
  const { genreName } = useParams();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("UseEffect GenreMovies:" + currentPage);
    retrieveMoviesByGenre();
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
      console.log("currentPage:" + currentPage);
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const debouncedHandleScroll = debounce(handleScroll, 100);

  const retrieveMoviesByGenre = async () => {
    try {
      console.log("GenreName:");
      setLoading(true);
      const response = await discoverMovies(genreName);
      setMovies(response.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error searching movies:", error.message);
    }
  };

  return (
    <div>
      <h1>{genreName} Movies</h1>
      <div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {movies.map(
            (movie) =>
              movie.posterPath && <MovieCard key={movie.id} movie={movie} />
          )}
        </div>
      </div>
    </div>
  );
};

export default GenreMovies;
