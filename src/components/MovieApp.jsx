import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PopularMovies from "./PopularMovies";
import SearchMovie from "./SearchMovie";
import HomeComponent from "./HomeComponent";
import HeaderComponent from "./HeaderComponent";
import Genres from "./Genres";
import GenreMovies from "./GenreMovies";
import MovieDetailCard from "./MovieDetailCard";

function MovieApp() {
  return (
    <div className="MovieApp">
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" exact element={<HomeComponent />} />
          <Route path="/movies/popular" element={<PopularMovies />} />
          <Route path="/movies/search" element={<SearchMovie />} />
          <Route path="/movies/genres" element={<Genres />} />
          <Route path="/movies/:id" element={<MovieDetailCard />} />
          <Route
            path="/movies/genres/:genreName"
            element={<GenreMovies />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MovieApp;
