import React from "react";
import "./Sort.css";

export const Sort = ({ sortParam, setSortParam }) => {
  return (
    <div className="sort">
      <label className="sortBy">
        <span className="select-label">Sort by</span>
        <select
          value={sortParam}
          onChange={(e) => setSortParam(e.target.value)}
        >
          <option value="release_date">Release Date</option>
          <option value="vote_average">Rating</option>
        </select>
      </label>
    </div>
  );
};
