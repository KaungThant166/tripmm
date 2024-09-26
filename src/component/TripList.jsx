import React, { useState } from "react";
import "./triplist.css";
import useFetch from "../hooks/useFetch";
const TripList = () => {
  const [url, setUrl] = useState("http://localhost:3001/trips");
  const { data: trips, loading, error } = useFetch(url);

  return (
    <div className="container">
      <h1>Ready To Go?</h1>
      {loading && <p>isLoading</p>}
      {error && <p>isError</p>}
      <div>
        <button onClick={() => setUrl("http://localhost:3001/trips")}>
          all
        </button>
        <button
          onClick={() => setUrl("http://localhost:3001/trips?location=Myanmar")}
        >
          Trips in Myanmar
        </button>
      </div>
      <ul className="trips-list">
        {trips &&
          trips.map((trip) => (
            <li className="trip" key={trip.id}>
              <h3>{trip.name}</h3>
              <p>{trip.price} -mmk</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TripList;
