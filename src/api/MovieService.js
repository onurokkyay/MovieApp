import axios from 'axios';
import { apiClient } from "./ApiClient";

const BASE_URL = "/movies";

// Example of calling "Retrieve a Movie by its ID" API
export async function getMovieById(movieId) {
  try {
    const response = await apiClient.get(`${BASE_URL}/${movieId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie by ID:", error.message);
    throw error;
  }
}

// Example of calling "Search Movies" API
export async function searchMovies(movieName, includeAdult = false, page = 1) {
  try {
    const response = await apiClient.get(`${BASE_URL}`, {
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
    const response = await apiClient.get(`${BASE_URL}/popular`, {
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
    const response = await apiClient.get(`${BASE_URL}/genres`);
    console.error("Genres:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching genres:", error.message);
    throw error;
  }
}

// Example of calling "Discover Movies" API
export async function discoverMovies(withGenres,page) {
  try {
    const response = await apiClient.get(`${BASE_URL}/discover`, {
      params: {
        withGenres,
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error discovering movies:", error.message);
    throw error;
  }
}

export async function getTrendingPeople(timeWindow) {
  try {
    const response = await apiClient.get(`${BASE_URL}/person/trending`, {
      params: {
        timeWindow,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting trending people:", error.message);
    throw error;
  }
}

export async function retrievePersonDetailById(personId) {
  try {
    const response = await apiClient.get(`${BASE_URL}/person/${personId}`);
    return response.data;
  } catch (error) {
    console.error("Error getting trending people:", error.message);
    throw error;
  }
}
