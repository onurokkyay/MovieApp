import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="col">
      <div className="card">
        <img src={movie.posterPath} className="card-img-top" alt={movie.title} />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">Release Date: {movie.releaseDate}</p>
          <p className="card-text">Adult: {movie.adult ? "Yes" : "No"}</p>
          <p className="card-text">Original Language: {movie.originalLanguage}</p>
          <p className="card-text">Original Title: {movie.originalTitle}</p>
          <p className="card-text">Overview: {movie.overview}</p>
          <p className="card-text">Popularity: {movie.popularity}</p>
          <p className="card-text">Vote Average: {movie.voteAverage}</p>
          <p className="card-text">Vote Count: {movie.voteCount}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;