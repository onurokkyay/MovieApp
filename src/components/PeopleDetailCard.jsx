import React, { useEffect, useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { retrievePersonDetailById } from "../api/MovieService";

const PeopleDetailCard = () => {
  const { id } = useParams();
  const [person, setPerson] = useState();

  useEffect(() => {
    console.error(" useEffect:" + id);
    retrievePersonById();
  }, []);

  const retrievePersonById = async () => {
    try {
      const response = await retrievePersonDetailById(id);
      console.error(" Response:");
      console.log(response);
      setPerson(response);
    } catch (error) {
      console.error("Error retrievePersonById:", error.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {person && (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={person.profilePath} alt={person.name} />
          <Card.Body>
            <Card.Title>{person.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {person.knownForDepartment}
            </Card.Subtitle>
            <Card.Text>Biography: {person.biography}</Card.Text>
            <Card.Text>Birthday: {person.birthday}</Card.Text>
            <Card.Text>
              Gender: {person.gender === 2 ? "Male" : "Female"}
            </Card.Text>
            <Card.Text>Homepage: {person.homepage}</Card.Text>
            <Card.Text>IMDb ID: {person.imdbId}</Card.Text>
            <Card.Text>Place of Birth: {person.placeOfBirth}</Card.Text>
            <Card.Text>Popularity: {person.popularity}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default PeopleDetailCard;
