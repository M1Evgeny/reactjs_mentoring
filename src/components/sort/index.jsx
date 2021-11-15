import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./Sort.css";

export const Sort = () => {
  const history = useHistory();
  const location = useLocation();

  const useQuery = () => new URLSearchParams(location.search);
  const sortBy = useQuery().get("sortBy");

  const handleChange = (value) => {
    if (location.search) {
      history.push(`/search${location.search}&sortBy=${value}`);
      return;
    }
    history.push(`/search?sortBy=${value}`);
  };
  return (
    <div className="sort">
      <label className="sortBy">
        <span className="select-label">Sort by</span>
        <select
          value={sortBy ? sortBy : "release_date"}
          onChange={(event) => handleChange(event.target.value)}
        >
          <option value="release_date">Release Date</option>
          <option value="vote_average">Rating</option>
        </select>
      </label>
    </div>
  );
};
