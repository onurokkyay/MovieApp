import React, { useState, useEffect } from "react";
import { getTrendingPeople } from "../api/MovieService.js";
import debounce from "lodash.debounce";
import PeopleCard from "./PeopleCard.jsx";
import { Button } from "react-bootstrap";

const TrendingPeopleComponent = () => {
  const [trendingPeople, setTrendingPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [timeWindow, setTimeWindow] = useState("day");

  useEffect(() => {
    retrieveTrendingPeople();
  }, [timeWindow]);

  const retrieveTrendingPeople = async () => {
    try {
      setLoading(true);
      const response = await getTrendingPeople(timeWindow);
      setTrendingPeople(response.personList);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error retrieveTrendingPeople:", error.message);
    }
  };

  const handleTimeWindowDay = () => {
    console.log("TimeWindowDay")
    setTimeWindow("day");
  };

  const handleTimeWindowWeek = () => {
    console.log("TimeWindowDay")
    setTimeWindow("week");
  };

  return (
    <div>
      <h1>Trending People {timeWindow}</h1>
      <Button style={{ width: "5rem", margin: "30px" }} variant="success" onClick={handleTimeWindowDay}>
        Day
      </Button>
      <Button style={{ width: "5rem", margin: "30px" }} variant="success" onClick={handleTimeWindowWeek}>
        Week
      </Button>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {trendingPeople.map(
          (people) =>
            people.profilePath && <PeopleCard key={people.id} people={people} />
        )}
      </div>
    </div>
  );
};

export default TrendingPeopleComponent;
