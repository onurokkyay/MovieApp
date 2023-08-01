import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="col" style={{ width: "300px", height: "1200px" }}>
      <Card style={{ width: "100%", height: "100%" }}>
        <Link to={`../movies/${movie.id}`}>
          <Card.Img variant="top" src={movie.posterPath} alt={movie.title} />
        </Link>
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>Release Date: {movie.releaseDate}</Card.Text>
          <Card.Text>Original Language: {movie.originalLanguage}</Card.Text>
          <Card.Text>Original Title: {movie.originalTitle}</Card.Text>
          <Card.Text>Popularity: {movie.popularity}</Card.Text>
          <Card.Text>Vote Average: {movie.voteAverage}</Card.Text>
          <Card.Text>Vote Count: {movie.voteCount}</Card.Text>
          <Card.Text>Overview: {movie.overview}</Card.Text>
          <div style={{ marginTop: "auto", paddingTop: "10px" }}>
            <Button variant="primary">Button 1</Button>
            <Button variant="secondary">Button 2</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
