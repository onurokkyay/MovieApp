import React from 'react';
import { Card } from 'react-bootstrap';

const MovieCard = ({ movie }) => {

  return (
    <div className="col">
      <Card>
        <Card.Img variant="top" src={movie.posterPath} alt={movie.title} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>Release Date: {movie.releaseDate}</Card.Text>
          <Card.Text>Adult: {movie.adult ? "Yes" : "No"}</Card.Text>
          <Card.Text>Original Language: {movie.originalLanguage}</Card.Text>
          <Card.Text>Original Title: {movie.originalTitle}</Card.Text>
          <Card.Text>Overview: {movie.overview}</Card.Text>
          <Card.Text>Popularity: {movie.popularity}</Card.Text>
          <Card.Text>Vote Average: {movie.voteAverage}</Card.Text>
          <Card.Text>Vote Count: {movie.voteCount}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;