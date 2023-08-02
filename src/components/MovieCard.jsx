import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="col" style={{ width: "300px", height: "480px" }}>
      <Card style={{ width: "100%", height: "100%" }}>
        <Link to={`../movies/${movie.id}`}>
          <Card.Img variant="top" src={movie.posterPath} alt={movie.title} />
        </Link>
        <Card.Body style={{ maxHeight: "160px", overflow: "hidden" }}>
          <Card.Title>{movie.title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
