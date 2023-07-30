import React, { useState, useEffect } from "react";
import { getGenres } from "../api/MovieService.js";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Genres = () => {
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();

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
            <Button
              onClick={ () => navigate(`/movies/genres/${genre.name}`, {
                state: {
                  id: genre.id,
                  name: genre.name,
                },
              })}
            >
              {genre.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;
