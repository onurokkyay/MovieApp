import React, { useState, useEffect } from "react";
import { getTrendingPeople } from "../api/MovieService.js";
import debounce from "lodash.debounce";
import PeopleCard from "./PeopleCard.jsx";

const TrendingPeopleComponent = () => {
  const [trendingPeople, setTrendingPeople] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    retrieveTrendingPeople();
  }, []);


  const retrieveTrendingPeople = async () => {
    try {
      setLoading(true);
      const response = await getTrendingPeople("day");
      setTrendingPeople((prevTrendingPeople) => [...prevTrendingPeople, ...response.personList]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error retrieveTrendingPeople:", error.message);
    }
  };

  return (
    <div>
      <h1>Trending People</h1>
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
