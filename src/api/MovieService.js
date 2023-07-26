import { apiClient } from "./ApiClient";
import axios from "axios";

export const retrieveAllTodosForUserNameApi = (movieName) =>{
    var url = new URL("http://localhost:8080/movieservice/movies/");
    url.searchParams('movieName',movieName);
    axios.get(url)
}
  