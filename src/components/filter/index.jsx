import React from "react";
import "./Filter.css";
import { NavLink } from "react-router-dom";

export const Filter = () => {
  return (
    <ul className="container">
      <li>
        <NavLink
          to="/search?genre=all"
          activeClassName="selected"
          className="filter-item"
        >
          all
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/search?genre=Adventure"
          activeClassName="selected"
          className="filter-item"
        >
          Adventure
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/search?genre=Drama"
          activeClassName="selected"
          className="filter-item"
        >
          Drama
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/search?genre=Comedy"
          activeClassName="selected"
          className="filter-item"
        >
          Comedy
        </NavLink>
      </li>
    </ul>
  );
};
