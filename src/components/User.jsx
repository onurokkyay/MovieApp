import React, { useEffect, useState } from "react";
import userService from "../api/UserService";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

const User = () => {
  const [userData, setUserData] = useState(null);
  const [refresh, setRefresh] = useState(false)
  const authContext = useAuth();
  const userName = authContext.userName;

  useEffect(() => {
    console.log("refresh:"+refresh)
    const fetchUserData = async () => {
      try {
        const user = await userService.getUserByUserName(userName);
        console.log("UserData")
        console.log(user)
        setUserData(user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [refresh]);

  const handleRemoveFromWatched = async (id) => {
    console.log("Id:"+id)
    try {
      const response = await userService.removeWatchedMovie(userName,id );
      setRefresh(!refresh)
    } catch (error) {
      console.error("Error searching movies:", error.message);
    }
  };

  const handleRemoveFromFav = async (id) => {
    console.log("Id:"+id)
    try {
      const response = await userService.removeFavMovie(userName,id );
      setRefresh(!refresh)
    } catch (error) {
      console.error("Error searching movies:", error.message);
    }
  };

  return (
    userData &&
    <Container>
      <Row>
        <Col>
          <h3>User Info</h3>
          <p>
            <strong>Username:</strong> {userData.userName}
          </p>
          <p>
            <strong>Email:</strong> {userData.mail}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Watched Movies</h3>
          <Row>
            {userData.watchedMovies.map((movie) => (
              <Col key={movie.id}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={movie.poster_path}
                    alt={movie.title}
                  />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.overview}</Card.Text>
                    <Button variant="danger" onClick={() => handleRemoveFromWatched(movie.id)}>
                Remove from watched list
              </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Favorite Movies</h3>
          <Row>
            {userData.favMovies.map((movie) => (
              <Col key={movie.id}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={movie.poster_path}
                    alt={movie.title}
                  />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.overview}</Card.Text>
                    <Button variant="danger" onClick={() => handleRemoveFromFav(movie.id)}>
                Remove from fav list
              </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default User;
