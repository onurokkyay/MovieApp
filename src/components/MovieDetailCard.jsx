import React, { useEffect, useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getMovieById } from "../api/MovieService";
import userService from "../api/UserService";

const MovieDetailCard = () => {
  const { id } = useParams();
  const [movie, setMovies] = useState();
  const userName = "onurokkyay";
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showConflictAlert, setShowConflictAlert] = useState(false);

  useEffect(() => {
    console.error(" useEffect:" + id);
    retrievePopularMovies();
  }, []);

  const retrievePopularMovies = async () => {
    try {
      console.error(" retrievePopularMovies:");
      const response = await getMovieById(id);
      console.error(" Response:");
      console.log(response);
      setMovies(response);
    } catch (error) {
      console.error("Error retrievePopularMovies:", error.message);
    }
  };

  const handleAddToFav = async () => {
    try {
      const response = await userService.addFavMovie(userName, id);
      console.log(response);
      setShowSuccessAlert(true);
    } catch (error) {
      console.error("Error searching movies:", error.message);
      if (error.response && error.response.status === 409) {
        setShowConflictAlert(true);
      }
    }
  };

  const handleAddToWatched = async () => {
    try {
      const response = await userService.addWatchedMovie(userName, id);
      console.log(response);
      setShowSuccessAlert(true);
    } catch (error) {
      console.error("Error searching movies:", error.message);
      if (error.response && error.response.status === 409) {
        setShowConflictAlert(true);
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {movie && (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={movie.posterPath} alt={movie.title} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {movie.tagline}
            </Card.Subtitle>
            <Card.Text>Release Date: {movie.releaseDate}</Card.Text>
            <Card.Text>Original Language: {movie.originalLanguage}</Card.Text>
            <Card.Text>Original Title: {movie.originalTitle}</Card.Text>
            <Card.Text>Popularity: {movie.popularity}</Card.Text>
            <Card.Text>Vote Average: {movie.voteAverage}</Card.Text>
            <Card.Text>Vote Count: {movie.voteCount}</Card.Text>
            <Card.Text>Overview: {movie.overview}</Card.Text>
            <Card.Text>Status: {movie.status}</Card.Text>
            <Card.Text>Runtime: {movie.runtime} minutes</Card.Text>
            <Card.Text>Revenue: ${movie.revenue}</Card.Text>
            <Card.Text>Budget: ${movie.budget}</Card.Text>
            <Card.Text>IMDb ID: {movie.imdbId}</Card.Text>
            {movie.adult && <Card.Text>Adult Content: Yes</Card.Text>}
            {movie.genres.length > 0 && (
              <Card.Text>
                Genres:{" "}
                {movie.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}, </span>
                ))}
              </Card.Text>
            )}
            <Button variant="primary" href={movie.homepage} target="_blank">
              Visit Homepage
            </Button>

            <div style={{ marginTop: "10px" }}>
              <Button variant="success" onClick={handleAddToFav}>
                Add To Fav Movie List
              </Button>

              <Button
                variant="info"
                style={{ marginTop: "10px" }}
                onClick={handleAddToWatched}
              >
                Add To Watched Movie List
              </Button>
            </div>
          </Card.Body>
          {movie.backdropPath && (
            <Card.Footer>
              <Card.Img
                variant="bottom"
                src={movie.backdropPath}
                alt="Backdrop"
              />
            </Card.Footer>
          )}

          <Alert
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 9999,
            }}
            show={showSuccessAlert}
            variant="success"
            onClose={() => setShowSuccessAlert(false)}
            dismissible
          >
            <Alert.Heading>Success</Alert.Heading>
            <p>Movie added to list !</p>
          </Alert>

          <Alert
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 9999,
            }}
            show={showConflictAlert}
            variant="danger"
            onClose={() => setShowConflictAlert(false)}
            dismissible
          >
            <Alert.Heading>Conflict</Alert.Heading>
            <p>Movie already exists in list!</p>
          </Alert>
        </Card>
      )}
    </div>
  );
};

export default MovieDetailCard;
