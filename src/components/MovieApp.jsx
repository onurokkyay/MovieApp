import React from "react";
import { BrowserRouter , Route, Routes} from "react-router-dom";
import PopularMovies from "./PopularMovies";
import SearchMovie from "./SearchMovie";
import HomeComponent from "./HomeComponent";

function MovieApp() {
  return (
    <div className="MovieApp">
    <BrowserRouter>

        <Routes>
          <Route path="/" exact element={<HomeComponent />} />
          <Route path="/movies/popular" element={<PopularMovies />} />
          <Route path="/movies/search" element={<SearchMovie />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default MovieApp;
