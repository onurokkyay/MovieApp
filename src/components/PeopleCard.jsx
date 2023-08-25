import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const PeopleCard = ({ people }) => {
  console.log(people)
  return (
    <div className="col" style={{ width: "300px", height: "500px" }}>
      <Card style={{ width: "100%", height: "100%" }}>
        <Link to={`../people/${people.id}`}>
          <Card.Img variant="top" src={people.profilePath} alt={people.name} />
        </Link>
        <Card.Body style={{ maxHeight: "160px", overflow: "hidden" }}>
          <Card.Title>{people.name}</Card.Title>
          <Card.Text>{people.knownForDepartment}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PeopleCard;
