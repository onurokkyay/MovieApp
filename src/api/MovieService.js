import axios from 'axios';
import { apiClient } from "./ApiClient";

// Example of calling "Retrieve a Movie by its ID" API
export async function getMovieById(movieId) {
  try {
    const response = await apiClient.get(`/movieservice/movies/${movieId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie by ID:", error.message);
    throw error;
  }
}

// Example of calling "Search Movies" API
export async function searchMovies(movieName, includeAdult = false, page = 1) {
  try {
    const response = await apiClient.get(`/movieservice/movies`, {
      params: {
        movieName,
        includeAdult,
        page,
      },
    });
    console.log('Response data searchMovies:', response.data); // Log the response data
    return response.data;
  } catch (error) {
    console.error("Error searching movies:", error.message);
    throw error;
  }
}

// Example of calling "Retrieve Popular Movies" API
export async function getPopularMovies(page = 1) {
  try {
    const response = await apiClient.get(`/movieservice/movies/popular`, {
      params: {
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching popular movies:", error.message);
    throw error;
  }
}

// Example of calling "Retrieve Genres" API
export async function getGenres() {
  try {
    const response = await apiClient.get(`/movieservice/movies/genres`);
    return response.data;
  } catch (error) {
    console.error("Error fetching genres:", error.message);
    throw error;
  }
}

// Example of calling "Discover Movies" API
export async function discoverMovies(withGenres) {
  try {
    const response = await apiClient.get(`/movieservice/movies/discover`, {
      params: {
        withGenres,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error discovering movies:", error.message);
    throw error;
  }
}
