import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PopularMovies from "./PopularMovies";
import SearchMovie from "./SearchMovie";
import HomeComponent from "./HomeComponent";
import HeaderComponent from "./HeaderComponent";
import Genres from "./Genres";
import GenreMovies from "./GenreMovies";
import MovieDetailCard from "./MovieDetailCard";
import User from "./User";
import AuthProvider, { useAuth } from "./security/AuthContext";
import LoginComponent from "./LoginComponent";
import SignUpComponent from "./SignUpComponent";
import TrendingPeopleComponent from "./TrendingPeopleComponent";
import PeopleDetailCard from "./PeopleDetailCard";

function AuthenticatedRoute({ children }) {
  const authContext = useAuth();
  if (authContext.isAuthenticated) {
    return children;
  }
  return <Navigate to="/" />;
}

function MovieApp() {
  return (
    <div className="MovieApp">
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<LoginComponent />}></Route>
            <Route path="/login" element={<LoginComponent />}></Route>
            <Route
              path="/home"
              exact
              element={
                <AuthenticatedRoute>
                  <HomeComponent />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/movies/popular"
              element={
                <AuthenticatedRoute>
                  <PopularMovies />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/movies/search"
              element={
                <AuthenticatedRoute>
                  <SearchMovie />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/movies/genres"
              element={
                <AuthenticatedRoute>
                  <Genres />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/movies/:id"
              element={
                <AuthenticatedRoute>
                  <MovieDetailCard />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/movies/genres/:genreName"
              element={
                <AuthenticatedRoute>
                  <GenreMovies />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/people/trending"
              element={
                <AuthenticatedRoute>
                  <TrendingPeopleComponent />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/people/:id"
              element={
                <AuthenticatedRoute>
                  <PeopleDetailCard />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/profile/:userName"
              element={
                <AuthenticatedRoute>
                  <User />
                </AuthenticatedRoute>
              }
            />
            <Route path="/signup" element={<SignUpComponent />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default MovieApp;
