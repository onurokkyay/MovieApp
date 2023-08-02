import { apiClient } from "./ApiClient";

const UserService = {
  getUserByUserName: async (userName) => {
    try {
      const response = await apiClient.get(`/users/${userName}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createUser: async (userData) => {
    try {
      const response = await apiClient.post("/users", userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addWatchedMovie: async (userName, movieData) => {
    try {
      const response = await apiClient.post(
        `/users/${userName}/watchedMovies`,
        movieData
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addFavMovie: async (userName, movieData) => {
    try {
      const response = await apiClient.post(
        `/users/${userName}/favMovies`,
        movieData
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  removeWatchedMovie: async (userName, movieName) => {
    try {
      await apiClient.delete(`/users/${userName}/watchedMovies/${movieName}`);
    } catch (error) {
      throw error;
    }
  },

  removeFavMovie: async (userName, movieName) => {
    try {
      await apiClient.delete(`/users/${userName}/favMovies/${movieName}`);
    } catch (error) {
      throw error;
    }
  },
};

export default UserService;
