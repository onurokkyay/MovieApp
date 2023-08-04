import React, { useEffect, useState } from "react";
import userService from "../api/UserService";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const User = () => {
  const [userData, setUserData] = useState(null);
  const { userName } = useParams();

  useEffect(() => {
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
  }, []);

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
