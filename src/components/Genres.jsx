import React, { useState, useEffect } from "react";
import { getGenres } from "../api/MovieService.js";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Genres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    retrieveGenres();
  }, []);

  const retrieveGenres = async () => {
    try {
      const response = await getGenres();

      const genres = response;
      setGenres(genres);
    } catch (error) {
      console.error("Error searching movies:", error.message);
    }
  };

  return (
    <div>
      <h2>Genres</h2>
      <div className="row row-cols-1 row-cols-md-3 g-5">
        {genres.map((genre) => (
          <div key={genre.id}>
            <Link to={`/movies/genres/${genre.name}/${genre.id}`}>
              <Button>{genre.name}</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;
