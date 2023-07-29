import React from "react";
import { BrowserRouter , Route, Routes} from "react-router-dom";
import PopularMovies from "./PopularMovies";
import SearchMovie from "./SearchMovie";
import HomeComponent from "./HomeComponent";
import HeaderComponent from "./HeaderComponent";
import Genres from "./Genres";

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
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default MovieApp;
