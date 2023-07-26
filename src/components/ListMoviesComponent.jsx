import { useState } from "react";

export default function ListMoviesComponent() {

  const [movies, setMovies] = useState();

  function refreshTodos() {
    retrieveAllTodosForUserNameApi(userName)
      .then((response) => setTodos(response.data))
      .catch((error) => console.log(error));
  }

  return (
    <div className="container">
      <h1>Movies</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Movie Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.desc}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => deletemovie(movie.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => updatemovie(movie.id)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
