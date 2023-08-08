import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

function HeaderComponent() {
  const authContext = useAuth();
  const userName = authContext.userName;
  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            <a
              className="navbar-brand ms-2 fs-2 fw-bold text-black"
              href="https://github.com/onurokkyay"
            >
              onurokkyay
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item fs-5">
                  {
                    <Link className="nav-link" to="/home">
                      Home
                    </Link>
                  }
                </li>
                <li className="nav-item fs-5">
                  {
                    <Link className="nav-link" to="/movies/popular">
                      Popular Movies
                    </Link>
                  }
                </li>
                <li className="nav-item fs-5">
                  {
                    <Link className="nav-link" to="/movies/genres">
                      Genres
                    </Link>
                  }
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item fs-5">
                  {
                    <Link className="nav-link" to="/movies/search">
                      Search Movie
                    </Link>
                  }
                </li>
              </ul>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item fs-5">
                {
                  <Link className="nav-link" to={`/profile/${userName}`}>
                    Profile
                  </Link>
                }
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
