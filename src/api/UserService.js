import { apiClient } from "./ApiClient";

const BASE_URL = "/movieservice/users";

const UserService = {
  getUserByUserName: async (userName) => {
    try {
      const response = await apiClient.get(`${BASE_URL}/${userName}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  createUser: async (userData) => {
    try {
      const response = await apiClient.post(`${BASE_URL}`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addWatchedMovie: async (userName, id) => {
    try {
      const response = await apiClient.put(
        `${BASE_URL}/${userName}/movies/watched`,
        {
          id: id,
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addFavMovie: async (userName, id) => {
    try {
      const response = await apiClient.put(
        `${BASE_URL}/${userName}/movies/favorites`,
        {
          id: id,
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  removeWatchedMovie: async (userName, movieName) => {
    try {
      await apiClient.delete(
        `${BASE_URL}/${userName}/watchedMovies/${movieName}`
      );
    } catch (error) {
      throw error;
    }
  },

  removeFavMovie: async (userName, movieName) => {
    try {
      await apiClient.delete(`${BASE_URL}/${userName}/favMovies/${movieName}`);
    } catch (error) {
      throw error;
    }
  },
};

export default UserService;
