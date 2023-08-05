import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function HomeComponent() {
  const userName = "onurokkyay"
  return (
    <div>
      <Card style={{ width: '18rem', margin: '20px' }}>
        <Card.Body>
          <Card.Title>Popular Movies</Card.Title>
          <Card.Text>Discover popular movies.</Card.Text>
          <Button as={Link} to="/movies/popular" variant="primary">
            Go to Popular Movies
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', margin: '20px' }}>
        <Card.Body>
          <Card.Title>Search Movies</Card.Title>
          <Card.Text>Search for your favorite movies.</Card.Text>
          <Button as={Link} to="/movies/search" variant="primary">
            Go to Search Movies
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', margin: '20px' }}>
        <Card.Body>
          <Card.Title>Genres</Card.Title>
          <Card.Text>Discover movies by genres.</Card.Text>
          <Button as={Link} to="/movies/genres" variant="primary">
            Go to Genres
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', margin: '20px' }}>
        <Card.Body>
          <Card.Title>Profile</Card.Title>
          <Card.Text>Your profile and your watched,fav movies</Card.Text>
          <Button as={Link} to={`/profile/${userName}`} variant="primary">
            Go to Profile
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default HomeComponent;